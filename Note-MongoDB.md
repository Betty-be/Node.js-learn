# INSTALL STEP
`brew tap mongodb/brew` <br>
`brew install mongodb-community`
 >include the MongoDB Server processes `mongod` and `mongos`, the `MongoDB Database Tools`, and the `install_compass` script to separately install `MongoDB Compass`.

`mongod --dbpath ~/data/db`
 > place MongoDB's data in your home directory

<br>

# UNINSTALL STEP
`brew uninstall mongodb-community`<br>
`brew uninstall mongodb-database-tools`

<br>

# Start&Stop
`brew services start mongodb-community` <br>
`mongosh`<br>
 >start mongodb-community, then run mongosh in terminal,will start MongoDB shell.
     
`brew services stop mongodb-community`

<br>

# mongosh
## show database
`show dbs`
 >view all available databases.

<br>

## create database
`use database_name`
 >create a new database and switch into it.

<br>

## add data
MongoDB `collection` is representative of your data model, storing all  documents related to that model within the same grouping.
`db.collection_name.insert({zz:11,bb:34,cc:463})`
 >`insert` method runs on a  MongoDB collection to add elements of a JavaScript object to a new document

 <br>

## list the collection's contents
`db.collection_name.find()`

## searching for a specific item
`db.collection_name.find({_id: ObjectId("xxx")})`
 >Replace the ObjectId in this example with one from your own database results.

## some MongoDB commands
`show collections`
`db.collection_name.findOne`
 >Return a single item from database at random

`db.collection_name.findOne({xxx:'123'})`
 >Return a single item matching the criteria passed in as a parameter.

`db.collection_name.update({xxx:123},{xxx:234})`
 >Updates any matching documents with the second  parameter’s property values.

`db.collection_name.delete({xxx:123}`
 >Removes any matching documents in the collection.

`db.collection_name.deleteMany({})`
 >Removes all the documents in that collection. These commands can’t be undone.