import React, { useEffect, useState } from 'react'

const Stat = ({ label, value }) => (
  <div className="bg-white rounded-xl shadow border border-gray-100 p-6">
    <div className="text-gray-500 text-sm mb-2">{label}</div>
    <div className="text-3xl font-bold text-gray-900">{value}</div>
  </div>
)

const Dashboard = () => {
  const [summary, setSummary] = useState(null)
  const [events, setEvents] = useState([])

  useEffect(() => {
    async function load() {
      try {
        const [s, e] = await Promise.all([
          fetch('/api/analytics/summary?days=14').then(r => r.json()),
          fetch('/api/analytics/events?limit=50').then(r => r.json())
        ])
        if (s.ok) setSummary(s.summary)
        if (e.ok) setEvents(e.events)
      } catch {}
    }
    load()
  }, [])

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Portfolio Analytics</h2>
          <p className="text-gray-600">Last {summary?.rangeDays ?? 14} days</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Stat label="Total Page Views" value={summary?.totalPageViews ?? 0} />
          <Stat label="Unique Visitors" value={summary?.uniqueVisitors ?? 0} />
          <Stat label="Events Tracked" value={(summary?.eventsBreakdown || []).reduce((a, b) => a + b.count, 0)} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Events</h3>
            <ul className="space-y-2">
              {(summary?.eventsBreakdown || []).map((it) => (
                <li key={it.name} className="flex justify-between text-sm text-gray-700">
                  <span>{it.name}</span>
                  <span className="font-semibold">{it.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Top Pages</h3>
            <ul className="space-y-2">
              {(summary?.topPaths || []).map((it) => (
                <li key={it.path} className="flex justify-between text-sm text-gray-700">
                  <span>{it.path}</span>
                  <span className="font-semibold">{it.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Top Referrers</h3>
            <ul className="space-y-2">
              {(summary?.topReferrers || []).map((it) => (
                <li key={it.referrer} className="flex justify-between text-sm text-gray-700">
                  <span className="truncate max-w-[70%]" title={it.referrer}>{it.referrer}</span>
                  <span className="font-semibold">{it.count}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Recent Events</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-gray-500">
                  <th className="py-2 pr-4">Time</th>
                  <th className="py-2 pr-4">Name</th>
                  <th className="py-2 pr-4">Path</th>
                  <th className="py-2 pr-4">Referrer</th>
                </tr>
              </thead>
              <tbody>
                {events.map((e, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2 pr-4 text-gray-600">{new Date(e.timestamp).toLocaleString()}</td>
                    <td className="py-2 pr-4 font-medium">{e.name}</td>
                    <td className="py-2 pr-4 text-gray-700">{e.path}</td>
                    <td className="py-2 pr-4 text-gray-500 truncate max-w-[320px]" title={e.referrer}>{e.referrer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard