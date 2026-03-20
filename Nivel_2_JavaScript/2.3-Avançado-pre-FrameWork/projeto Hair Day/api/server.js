import http from 'http'

let appointments = []

const sendJSON = (res, status, payload) => {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  res.end(JSON.stringify(payload))
}

const server = http.createServer((req, res) => {
  const base = `http://${req.headers.host}`
  const parsed = new URL(req.url, base)
  const pathname = parsed.pathname
  const query = Object.fromEntries(parsed.searchParams.entries())

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
    return res.end()
  }

  if (pathname === '/appointments' && req.method === 'GET') {
    const { date } = query
    const results = date ? appointments.filter(a => a.date === date) : appointments
    return sendJSON(res, 200, results)
  }

  if (pathname === '/appointments' && req.method === 'POST') {
    let body = ''

    req.on('data', chunk => body += chunk)

    req.on('end', () => {
      try {
        const obj = JSON.parse(body)

        if (!obj.client || !obj.hour || !obj.date) {
          return sendJSON(res, 400, { error: 'Campos obrigatórios: client, hour, date' })
        }

        appointments.push(obj)

        return sendJSON(res, 201, obj)

      } catch {
        return sendJSON(res, 400, { error: 'JSON inválido' })
      }
    })

    return
  }

  sendJSON(res, 404, { error: 'Not found' })
})

const PORT = 3000

server.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`)
})