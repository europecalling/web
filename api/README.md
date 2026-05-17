# Form email API

PHP backend for website form submissions. Deploy to `web.europecalling.co`.

## What it does

All contact, feedback, and enquiry forms POST to **`https://web.europecalling.co/submit-form.php`**. Submissions are emailed to `mail.europecalling@gmail.com` via Gmail SMTP.

## Deploy on Hostinger (`public_html/web/`)

1. Upload `api/submit-form.php` to `web/submit-form.php` (or use the bootstrap file in `api/submit-form.php` that loads `web/api/send-form-email.php`)
2. Upload the `api/` folder to `web/api/` (`send-form-email.php`, `mail.php`, `cors.php`, `.htaccess`, `vendor/` after `composer install`)
3. Configure mail: copy `mail.local.php.example` → `mail.local.php` or use `mail.env` in `web/` or `web/api/`

```bash
cd api && composer install --no-dev
```

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/submit-form.php` | Submit any website form (sends email) |
| POST | `/api/send-form-email.php` | Same handler (alternate path) |

## Test

```bash
curl -X POST https://web.europecalling.co/submit-form.php \
  -H "Content-Type: application/json" \
  -d '{"form_type":"Contact Us Form","name":"Test User","phone":"+1234567890","email":"test@example.com","message":"Hello","country":"Georgia"}'
```

Expected: `{"status":"success","message":"Email sent"}`

## Environment

See `mail.env.example`. Never commit real Gmail app passwords.

Optional frontend env:

```env
VITE_FORM_API_URL=https://web.europecalling.co/submit-form.php
VITE_FORM_NOTIFY_SECRET=your-random-secret
```

## Files you can remove from the server

If you previously deployed gallery admin PHP, delete these from `web/` and `web/api/`:

- `auth.php`, `gallery.php`, `upload.php`, `verify-auth.php`, `setup.php`, `config.php`, `schema.sql`
