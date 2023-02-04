Node.js
===
Install Node.js: <https://nodejs.org/en/>

To show the version of Node.js
```console
node -v
```
To see the corresponding location
```console
which node
which npm
```
When install Node.js,also get `npm`.<br>
## Modules, packages, and dependencies
|Name|Description|
|:---|:---|
|Modules|individual JavaScript files containing code that pertains to a single concept, functionality, or library.|
|Packages|may contain multiple modules or a single module.<br>used to group files offering relevant tools|
|Dependencies|Node.js modules used by an application or another module|

## Node.js REPL
Node.js version of Read-Evaluate-Print-Loop
```console
node
```
|REPL command|Description|
|:---|:---|
|.break(or.clear)|Exist a block within the REPL session.<br>useful if get stuck in a block of code.|
|.editor|Open an internal editor for you to write multiple lines of code.<br> `ctrl-d` saves and quits the editor.|
|.exit<br>(or ctrl-c twice)|Quits the REPL session.|
|.help|List other commands and useful tips.|
|.load|Followed by a local filename;gives REPL access to that file's code.|
|.save|Followed by a new filename;saves REPL session's code to a file.|
## Node Version Manager(NVM)
- manage one version or multipleversions of Node.js on your computer.<br>
- can test newer versions of Node.js as they're released while still having older<br>
```console
brew install nvm
```

## exports & require
### exports
- a property od the module object.
- shorthand for `module.exports`.
- let module to be required by another JavaScript file.
```JavaScript
exports.xxx = ...
```
### require
- Node.js global object
- locally introduce methods and objects from other module.
```JavaScript
xxx = require(zzz)
```