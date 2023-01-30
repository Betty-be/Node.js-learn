const port = 3001,
    http = require("http"), // 呼叫http模組
    httpStatus = require("http-status-codes"); // 呼叫http-status-code模組

http
    .createServer((request, response) => {
        console.log("Received an incoming request!");
            response.writeHead(httpStatus.OK, {
                "Content-Type": "text/html"
            });

        let responseMessage = "<h1>Hello, Universe!</h1>";
        response.end(responseMessage);
        console.log(`Sent a response : ${responseMessage}`);
    })

    .listen(port);

console.log(`The server has started and is listening on port number: ${port}`);