export function initAnalytics() {
  const visitorId = getVisitorId()

  function send(event) {
    try {
      navigator.sendBeacon(
        '/api/events',
        new Blob([JSON.stringify(event)], { type: 'application/json' })
      )
    } catch {
      fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      }).catch(() => {})
    }
  }

  function track(name, meta = {}) {
    const payload = {
      name,
      path: location.pathname,
      referrer: document.referrer || null,
      meta,
      visitorId,
      timestamp: new Date().toISOString()
    }
    send(payload)
  }

  // Auto track initial page view
  track('page_view')

  // Track route changes (simple hash or anchor navigation)
  window.addEventListener('hashchange', () => track('page_view'))

  return { track }
}

function getVisitorId() {
  const key = 'portfolio_visitor_id'
  let id = localStorage.getItem(key)
  if (!id) {
    id = `${Date.now()}-${Math.random().toString(36).slice(2)}`
    localStorage.setItem(key, id)
  }
  return id
}