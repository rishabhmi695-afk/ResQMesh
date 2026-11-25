const http = require("http");

const PORT = 3001;
let sosRecords = [];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (req.url === "/api/sos" && req.method === "GET") {
    res.writeHead(200);
    return res.end(JSON.stringify(sosRecords));
  }

  if (req.url === "/api/sos" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const record = JSON.parse(body);
        const existing = sosRecords.some((item) => item.id === record.id);

        if (!existing) {
          sosRecords.unshift(record);
        }

        res.writeHead(201);
        res.end(JSON.stringify({ success: true, record }));
      } catch {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });

    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`ResQMesh backend running on port ${PORT}`);
});
