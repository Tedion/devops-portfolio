import fs from 'fs/promises'
import path from 'path'

const ANALYTICS_DIR = path.join('server', '_analytics')
const EVENTS_FILE = path.join(ANALYTICS_DIR, 'events.jsonl')

async function ensureDir() {
  await fs.mkdir(ANALYTICS_DIR, { recursive: true })
}

export async function appendEvent(event) {
  await ensureDir()
  const line = JSON.stringify(event) + '\n'
  await fs.appendFile(EVENTS_FILE, line, 'utf8')
}

async function readAllEvents() {
  try {
    const data = await fs.readFile(EVENTS_FILE, 'utf8')
    return data
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line)
        } catch {
          return null
        }
      })
      .filter(Boolean)
  } catch (e) {
    if (e.code === 'ENOENT') return []
    throw e
  }
}

export async function getEvents(limit = 100) {
  const events = await readAllEvents()
  return events.slice(-limit).reverse()
}

export async function getSummary(rangeDays = 7) {
  const events = await readAllEvents()
  const sinceMs = Date.now() - rangeDays * 24 * 60 * 60 * 1000
  const recent = events.filter((e) => new Date(e.timestamp).getTime() >= sinceMs)

  const totalPageViews = recent.filter((e) => e.name === 'page_view').length

  const uniqueVisitorSet = new Set()
  for (const e of recent) {
    const visitorKey = e.visitorId || e.ip || `${e.ua || 'unknown'}`
    uniqueVisitorSet.add(visitorKey)
  }

  const eventsByDayMap = new Map()
  const topPathsMap = new Map()
  const topReferrersMap = new Map()
  const eventNamesMap = new Map()

  for (const e of recent) {
    const day = new Date(e.timestamp).toISOString().slice(0, 10)
    eventsByDayMap.set(day, (eventsByDayMap.get(day) || 0) + (e.name === 'page_view' ? 1 : 0))
    if (e.path) topPathsMap.set(e.path, (topPathsMap.get(e.path) || 0) + 1)
    if (e.referrer) topReferrersMap.set(e.referrer, (topReferrersMap.get(e.referrer) || 0) + 1)
    eventNamesMap.set(e.name, (eventNamesMap.get(e.name) || 0) + 1)
  }

  const days = Array.from(eventsByDayMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, count]) => ({ date, count }))

  const topPaths = Array.from(topPathsMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([path, count]) => ({ path, count }))

  const topReferrers = Array.from(topReferrersMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([referrer, count]) => ({ referrer, count }))

  const eventsBreakdown = Array.from(eventNamesMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }))

  return {
    rangeDays,
    totalPageViews,
    uniqueVisitors: uniqueVisitorSet.size,
    days,
    topPaths,
    topReferrers,
    eventsBreakdown
  }
}