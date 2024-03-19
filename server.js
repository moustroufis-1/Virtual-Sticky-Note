const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Heroku dynamically assigns a port

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
