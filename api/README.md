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

## Frontend

Set `VITE_ADMIN_API_URL` for the API base (e.g. `https://web.europecalling.co/api`). Defaults to that URL.
