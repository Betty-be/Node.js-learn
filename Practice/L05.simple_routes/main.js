const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Sorry the page you are looking for is not here.</h1>",

}

const port = 3001,
    http = require("http"), // 呼叫http模組
    httpStatus = require("http-status-codes"), // 呼叫http-status-code模組
    app = http.createServer((req, res) => {
        console.log("Received an incoming request!");
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });
        setTimeout(() => res.end(routeResponseMap[res.url]), 3000);

        if (routeResponseMap[req.url]) {
            res.end(routeResponseMap[req.url]);
        
        }
        else
            {res.end("<h1>Welcome!</h1>")};
        
    });



app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);