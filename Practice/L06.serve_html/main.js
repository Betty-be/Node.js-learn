const { error } = require("console");

const port = 3000,
    http = require("http"),
    httpStatusCodes = require("http-status-codes"),
    router = require("./router"),
    fs = require("fs"),
    plainTextContentType = {
        "Content-Type": "text/plain"
    },
    htmlContentType = {
        "Content-Type": "text/html"
    },
    customReadFile = (file, res) => {
        fs.readFile(`./${file}`, (errors, data) => {
            if (errors) {
                console.log("Error reading the file...");
            }
            res.end(data);
        });
    };

// const routeMap = {
//     "/": "views/index.html"
// };


// const getViewUrl = (url) => {
//     return `views${url}.html`;
// };

// const sendErrorResponse = res => {
//     res.writeHead(httpStatus.NOT_FOUND, {
//         "Content-Type": "text/html"
//     });
//     res.write("<h1>File Not Found!</h1>");
//     res.end();
// };

router.get("/", (req, res) => {
    res.writeHead(httpStatusCodes.OK, plainTextContentType);
    res.end("INDEX");
});

router.get("/index.html", (req, res) => {
    res.writeHead(httpStatusCodes.OK, htmlContentType);
    customReadFile("views/index.html", res);
});

router.post("/", (req, res) => {
    res.writeHead(httpStatusCodes.OK, plainTextContentType);
    res.end("POSTED");
});

http.createServer(router.handle).listen(3000);



        // let viewUrl = getViewUrl(req.url);

        // res.writeHead(200, {
        //     "Content-Type": "text/html"
        // });
        // fs.readFile(viewUrl, (error, data) => {
        //     if(error){
        //         res.writeHead(httpStatus.NOT_FOUND);
        //         res.write("<h1>FILE NOT FOUND</H1>");
        //     }
        //     else{
        //         res.writeHead(httpStatus.OK, {
        //             "Content-Type": "text/html"
        //         });
        //         res.write(data);
        //     }
        //     res.end();
        // });
    
console.log(`The server has started and is listening on port number: ${port}`);

