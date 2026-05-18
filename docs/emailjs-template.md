# EmailJS template setup (`template_7umuavj`)

Configure in the [EmailJS dashboard](https://dashboard.emailjs.com/) for service `service_hcwj5si`.

## Subject

```
{{subject}}
```

## Content (HTML)

```html
<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;color:#222;">
  <h2 style="color:#FF7700;">{{form_type}}</h2>
  <table style="border-collapse:collapse;width:100%;max-width:600px;">
    {{{rows_html}}}
  </table>
</body>
</html>
```

Use **triple braces** for `rows_html` so table markup is not escaped.

## Template parameters (sent from the app)

| Parameter   | Description                                      |
| ----------- | ------------------------------------------------ |
| `subject`   | Email subject line                               |
| `form_type` | Orange heading text                              |
| `rows_html` | Table rows (`<tr>...</tr>`) built by the website |
| `reply_to`  | Submitter email when provided (for Reply-To)     |

## Service

- Service ID: `service_hcwj5si`
- Connect Gmail: `mail.europecalling@gmail.com`
- Default **To** address: `mail.europecalling@gmail.com`

## Security

Account → Security: allow requests only from `europecalling.co` and `localhost`.
