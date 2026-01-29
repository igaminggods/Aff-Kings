# Aff Kings Redirect Site

A blank website with 4 subpages ready for redirect configuration.

## Pages

- `/` - Home page
- `/blank` - Blank redirect page
- `/blog` - Blog redirect page
- `/reg` - Registration redirect page
- `/dep` - Deposit redirect page

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## Configuration

To add redirect functionality, you can modify the route handlers in `server.js` to redirect to external URLs:

```javascript
app.get('/blank', (req, res) => {
  res.redirect('https://your-redirect-url.com');
});
```

## Port

The server runs on port 3000 by default. You can change this by setting the `PORT` environment variable.

