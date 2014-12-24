# _DeltaHacks Backend_

_Hackathon registration system built on Node, Express, Angular, MongoDB, Redis. Manages application and acceptance process. Secured via JSON Web Tokens (JWT)._

## Dependencies

1. Node.js _(v0.10.34)_
2. MongoDB _(v2.6.6)_
2. Redis _(v2.8.19)_

## Running Project Locally

_To run application, follow these steps._

1. Create 'secrets.js' in _/config_ directory
```javascript
module.exports = {
    mongo: {
        url: 'mongodb://yourhost:port/dbName',
        host: 'yourhost',
        port: 'port',
        db: 'dbName',
        password: 'CREATE SOME PASSWORD HERE'
    },
    redis:{
        url: 'redis://yourhost:port/yourDBNumber',
        host: 'yourhost',
        port: 'port',
        db: 'yourDBNumber', //ex. '0', redis doesnt use named dbs
        password: 'CREATE SOME PASSWORD HERE'
    },
    sessionSecret: 'SOMELONGSESSIONSECRETHEREFORJWT'
}
```
2. Install NPM project dependencies
```bash
$ cd deltahacks
$ sudo npm install
```
3. Install _nodemon_ globally via NPM to watch for file changes
```bash
$ sudo npm install nodemon -g
```
4. Start MongoDB and Redis with respective config from _secrets.js_
```bash
$ sudo service mongod start
$ sudo service redis-server start
```
5. Start _deltahacks_ Node application
```bash
$ npm start
```