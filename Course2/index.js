const http = require("http");
const fs = require("fs/promises");

const PORT = 8100;

const server = http.createServer(async (request, response) => {
    const contentBuffer = await fs.readFile(__dirname + "/text.txt");
    const contentBuffer2 = await fs.readFile(__dirname + "/text.txt");

    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end(contentBuffer.toString("utf-8"));
})

server.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
})