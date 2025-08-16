# DevOps Portfolio

Run locally:

1. Install dependencies

```bash
npm install
```

2. (Optional) Configure SMTP for email delivery. Copy `.env.example` to `.env` and fill values.

3. Start frontend + backend together

```bash
npm run dev:all
```

- Frontend: http://localhost:5173
- API: http://localhost:5000

Alternatively, run only frontend:

```bash
npm run dev
```

And backend separately:

```bash
npm run server
```

Contact API

- POST /api/contact
- Body: `{ name, email, subject, message }`

Notes

- Without SMTP env vars, messages are saved as JSON files under `server/_inbox/`.
- Update contact info in `src/components/Contact.jsx` and `src/components/Footer.jsx`.
