Book Structure
===
## U0 set up
- [ ] L0.setting up Node.js & JavaScript engine
- [ ] L1.configure environment
  - [ ] install Node.js
  - [ ] install a text editor
- [ ] L2.running a Node.js application
## U1 start
- [ ] L3.creating a Node.js module
  - [ ] npm
- [ ] L4.building a simple web server in Node.js
- [ ] L5.handling incoming data
- [ ] L6.writing better routes and serving external files
- [ ] L7.Capstone: creating a first web application
## U2 Express.js
- [ ] L8.setting up an app with Express.js
- [ ] L9.routing in Express.js
- [ ] L10.connecting views with templates
- [ ] L11.configurations and error handling
- [ ] L12.Capstone: enhance the web application
## U3 Database
- [ ] L13.setting up a `MongoDB` database
  <details><summary>INSTALL STEP</summary>
  
    `brew tap mongodb/brew` <br>
    `brew install mongodb-community`
     >include the MongoDB Server processes `mongod` and `mongos`, the `MongoDB Database Tools`, and the `install_compass` script to separately install `MongoDB Compass`.

    `mongod --dbpath ~/data/db`
     > place MongoDB's data in your home directory
  </details>
  <details><summary>Start&Stop</summary>
  
    `brew services start mongodb-community` <br>
    `mongosh`<br>
     >start mongodb-community, then run mongosh in terminal,will start MongoDB shell.
     
    `brew services stop mongodb-community`
  
  </details>
  <details><summary>UNINSTALL STEP</summary>
  
   `brew uninstall mongodb-community`<br>
   `brew uninstall mongodb-database-tools`
  </details>
- [ ] L14.building models with `Mongoose`
- [ ] L15.connecting controllers and models
- [ ] L16.Capstone: Saving user subscriptions
## U4 Building a user model
- [ ] L17.improving your data model
- [ ] L18.building the user model
- [ ] L19.creating and reading your models
- [ ] L20.updating and deleting your models
- [ ] L21.Capstone: Adding CRUD models to application
## U5 Authenticating user accounts
- [ ] L22.adding sessions and flash messages
- [ ] L23.Building a user login and hashing passwords
- [ ] L24.Adding user authentication
- [ ] L25.Capstone: Adding user authentication to Confetti Cuisine
## U6 Building an API
- [ ] L26.Adding an API to your application
- [ ] L27.Accessing your API from your application
- [ ] L28.Adding API security
- [ ] L29.Capstone: Implementing an API
## U7 Adding chat functionality
- [ ] L30.Working with Socket.io
- [ ] L31.Saving chat messages
- [ ] L32.Adding a chat notification indicator
- [ ] L33.Capstone: Adding a chat feature to Confetti Cuisine
## U8 Deploying and managing code in production
- [ ] L34.Deploying your application
- [ ] L35.Managing in production
- [ ] L36.Testing your application
- [ ] L37.Capstone: Deploying Confetti Cuisine