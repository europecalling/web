# Europe Calling Web

Marketing site for Europe Calling — European travel consultancy and tour packages.

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- [EmailJS](https://www.emailjs.com/) (form notifications)

## Local development

Requires [Node.js](https://nodejs.org/) and npm.

```sh
cp .env.example .env.local
# Edit .env.local with your EmailJS service, template, and public key
npm install
npm run dev
```

The dev server runs at `http://localhost:8080`.

## Environment variables

Copy [`.env.example`](.env.example) to `.env.local` (gitignored):

| Variable | Description |
| -------- | ----------- |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS **public** key only |

Never commit the EmailJS private key. Restrict API usage to your domain in the EmailJS dashboard.

Email template HTML for the dashboard: [docs/emailjs-template.md](docs/emailjs-template.md).

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Deployment

1. Set the three `VITE_EMAILJS_*` variables on your static host.
2. Paste the template from [docs/emailjs-template.md](docs/emailjs-template.md) into EmailJS template `template_7umuavj`.
3. In EmailJS → Security, allow `europecalling.co` and `localhost`.
4. Remove legacy PHP endpoints (`submit-form.php`, `web/api/`) from the server if still deployed.
5. Test contact, feedback, enquiry, trip planner, lead popup, and country page forms once in production.
