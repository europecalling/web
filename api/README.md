# Gallery Admin API

PHP backend for the Europe Calling gallery admin dashboard. Deploy to `web.europecalling.co`.

## Setup

1. **Database**: Run the schema (or use setup.php):

```bash
mysql -u u262074081_web -p u262074081_web < schema.sql
```

2. **Create admin user**: Visit or run:

```
https://web.europecalling.co/api/setup.php
```

This creates tables and the admin user:
- **Email**: admin@gmail.com
- **Password**: admin123

3. **Uploads folder**: Ensure `uploads/` exists and is writable:

```bash
mkdir -p uploads
chmod 755 uploads
```


4. **Config**: Edit `config.php` if needed. For production, use environment variables for DB credentials.

## Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | /api/auth.php | No | Login (email, password) |
| GET | /api/gallery.php | No | List gallery items |
| POST | /api/gallery.php | Yes | Create item |
| PUT | /api/gallery.php?id=X | Yes | Update item |
| DELETE | /api/gallery.php?id=X | Yes | Delete item |
| POST | /api/upload.php | Yes | Upload image |
| POST | /api/send-form-email.php | Optional secret | Contact / Feedback form email notifications |

## Form email notifications (Contact & Feedback)

Sends submissions to `mail.europecalling@gmail.com` via Gmail SMTP when users submit the Contact page forms.

### Security

If a Gmail app password was ever shared in chat or committed to git, **revoke it** in [Google Account → App passwords](https://myaccount.google.com/apppasswords) and create a new one. Store credentials only on the server in `mail.local.php` or host environment variables—never in the frontend build.

### Setup

1. Install PHPMailer:

```bash
cd api
composer install --no-dev
```

2. Configure mail (choose one):

- Copy `mail.local.php.example` to `mail.local.php` and set `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `NOTIFY_TO`, or
- Set the same keys as environment variables on the host (see `mail.env.example`).

3. Optional: set `FORM_NOTIFY_SECRET` on the server and `VITE_FORM_NOTIFY_SECRET` in the frontend `.env` so only your site can call the endpoint.

### Test

```bash
curl -X POST https://web.europecalling.co/api/send-form-email.php \
  -H "Content-Type: application/json" \
  -d '{"form_type":"Contact Us Form","name":"Test User","phone":"+1234567890","email":"test@example.com","message":"Hello","country":"Georgia"}'
```

Expected response: `{"status":"success","message":"Email sent"}`

### Frontend env (optional)

```env
VITE_FORM_EMAIL_API_URL=https://web.europecalling.co/api/send-form-email.php
VITE_FORM_NOTIFY_SECRET=your-random-secret
```

## Frontend

Set `VITE_ADMIN_API_URL` for the API base (e.g. `https://web.europecalling.co/api`). Defaults to that URL.
