# DevOps Portfolio

Run locally:

1. Install dependencies

```bash
npm install
```

2. (Optional) Configure SMTP and analytics flags. Copy `.env.example` to `.env` and fill values.

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

- In production, set `CORS_ORIGIN` in `.env` to your site origin to restrict API access.

---

## Deployment to GitHub

The repository is already initialized. To push your current branch:

```bash
git add -A
git commit -m "chore: workflows for pages and server"
git push -u origin HEAD
```

If you need to set a new remote:

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## GitHub Actions Workflows

- `.github/workflows/deploy-pages.yml`: Builds the Vite app and deploys `dist/` to GitHub Pages on pushes to `main` or manual dispatch.
- `.github/workflows/build-and-push-server.yml`: Builds `server/Dockerfile` and pushes the image to GitHub Container Registry as `ghcr.io/<owner>/devops-portfolio-server`.

### Configure Pages
1. Push to `main` and wait for the workflow.
2. In GitHub repo Settings → Pages → set Source to "GitHub Actions".

### Configure Gmail SMTP secrets (for server hosting)
If you deploy the backend somewhere (Render/Railway/Fly/Heroku), set these environment variables on that platform:
- `SMTP_HOST=smtp.gmail.com`
- `SMTP_PORT=587`
- `SMTP_USER=tedionabera@gmail.com`
- `SMTP_PASS=<your-app-password>`
- `FROM_EMAIL=tedionabera@gmail.com`
- `TO_EMAIL=tedionabera@gmail.com`

Gmail requires 2FA and an App Password.

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

## Deployment

### Backend (Render)

1. Create a new Web Service from this repo using Render.
2. Use the included `render.yaml` (Blueprint) or configure manually:
   - Runtime: Node
   - Build command: `npm install`
   - Start command: `node server/index.js`
   - Persistent disk: mount to `/opt/render/project/src/server/_inbox` (1 GB) for contact storage fallback
3. Environment variables:
   - `NODE_ENV=production`
   - `CORS_ORIGIN=https://<your-username>.github.io` (exact origin, no trailing slash)
   - Optional SMTP if you want email delivery:
     - `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `SMTP_PORT` (587 default), `FROM_EMAIL`, `TO_EMAIL`

### Frontend (GitHub Pages)

1. Set repository Settings → Pages → Build from GitHub Actions.
2. Add repository variables and secrets:
   - Repository variable `VITE_BASE` = `/<your-repo-name>/`
   - Repository secret `VITE_API_BASE` = `https://<your-backend-domain>/api`
3. Push to `main` (or run the workflow manually). The workflow at `.github/workflows/deploy-pages.yml` will:
   - Install deps, build with the variables above
   - Publish `dist/` to Pages

### Verify

- Open your site on GitHub Pages and submit the contact form.
- Network request should POST to `https://<your-backend-domain>/api/contact` and return `{ ok: true, ... }`.
- If you see CORS errors, ensure `CORS_ORIGIN` exactly matches your Pages origin.
