# Express.js

```
npm install express --save
```

use HTTP method and path(URL)

```js
app.post("/contact", (req, res) => {
    res.send("Contact information submitted successfully.");
});
```

|    code    | mean                                               |
| :--------: | :------------------------------------------------- |
|    app    | an instance of the main Express.js framework class |
|    post    | HTTPmethod                                         |
| "/contact" | path(URL)                                          |
| (req, res) | callback                                           |



<br>

```js
app.get("/items/:vegetables", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg});
});
```

|         code         | mean                                                                                              |
| :------------------: | :------------------------------------------------------------------------------------------------ |
| "/items/:vegetables" | route parameters<br />have a colon(:) before the parameter <br />can exist anywhere in the  path |

```javascript
app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});
```

| code | mean                                                        |
| :--: | ----------------------------------------------------------- |
| next | calling the next function in request-response excution flow |
|      |                                                             |

### two main ways to get data from the user

- Through the request body in a `post` request
  - a route that listens for posted data to a specific URL
    ```js
    // Tell Express.js application to parse URL-encoded data

    app.use(express.urlencoded({
        extended: false})
    );
    app.use(express.json());
    ```
- Through the request's query string in the URL

## MVC model-view-controller
|main parts|breakdown and definitions|
|:---:|:---|
|Views|rendered display of data|
|Models|represent object-oriented data<br>define what data an order should contain and the types of functions you can run on that data|
|Controllers|the glue between views and models<br>perform most of the logic<br>route callback functions act as controllers|
<br>
### express-generator
provides some boilerplate code for an application<br>
offers scaffolding(prebuilt folders, modules, and configurations)
```
npm install express-generator -g
```
entering `express` and the project name in a new terminal window
```
express XXX
```

## templating engine
what Express.js uses to process views and convert them to brower-readable HTML pages.

### EJS Embedded JavaScript
a syntax for applying JavaScript functions and variables within your views
```
npm install ejs --save
```
install `express` and `ejs` in one line
```
npm install express ejs --save
```

```
npm i express-ejs-layouts -S
```