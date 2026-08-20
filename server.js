const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
            <head>
                <title>AWS Capstone Project 5</title>
            </head>
            <body>
                <h1>Hello from Project 5 - Version 1</h1>
                <p>Node.js CI/CD Pipeline Demo</p>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});