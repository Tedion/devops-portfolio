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

---

## Deployment to GitHub

The repository is already initialized. To push your current branch:

```bash
git add -A
git commit -m "chore: add .env.example and docs for SMTP + deployment"
git push -u origin HEAD
```

If you need to set a new remote:

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## SMTP configuration

The backend reads environment variables via `dotenv` and `server/index.js`:

- `SMTP_HOST`, `SMTP_PORT` (465 for SSL, 587 for STARTTLS)
- `SMTP_USER`, `SMTP_PASS`
- `FROM_EMAIL`, `TO_EMAIL`

Steps:

1. Copy `.env.example` to `.env` and fill values from your provider (e.g., Gmail App Password, SendGrid, Mailgun, Postmark, SES, Resend).
2. Never commit `.env` (it's ignored by `.gitignore`).
3. For production hosting, configure the same variables in your platform's dashboard (e.g., Render, Railway, Fly.io, Heroku). No code changes needed.

Test email locally after setting `.env`:

```bash
npm run server
# POST to http://localhost:5000/api/contact with { name, email, subject, message }
```
