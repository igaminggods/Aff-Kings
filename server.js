const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Route handlers for subpages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/blank', (req, res) => {
  res.redirect('https://track.ftdgallery.com/visit/?bta=36322&nci=5527&afp10=Streamers');
});

app.get('/blog', (req, res) => {
  res.redirect('https://track.ftdgallery.com/visit/?bta=36322&nci=5549&afp10=Streamers');
});

app.get('/reg', (req, res) => {
  res.redirect('https://track.ftdgallery.com/visit/?bta=36322&nci=5551&afp10=Streamers');
});

app.get('/dep', (req, res) => {
  res.redirect('https://track.ftdgallery.com/visit/?bta=36322&nci=5503&afp10=Streamers');
});

app.get('/spino', (req, res) => {
  res.redirect('https://track.ftdgallery.com/visit/?bta=36322&brand=spinogambino');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

