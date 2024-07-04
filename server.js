const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/hello.html', (req, res) => {
    const visitorName = req.query.visitor_name;
    const clientIp = req.ip; // This will get to the client's IP address
    const location = "New York"; // Static location for demonstration purposes
    const greeting = `Hello, ${visitorName}!, the temperature is 11 degreees Celsius in New York`;

    res.json({
        client_ip: clientIp,
        location: location,
        greeting: greeting
    });
});

app.listen(3000, () => {
    console.log(`Server running on http://localhost:${3000}`);
});