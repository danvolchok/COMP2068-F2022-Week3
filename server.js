const express = require('express')

// create new express object

const app = express()

// add http request handler
let hello = (req, res) => {
    res.writeHead(200)
    res.write('Hello world')
    res.end()
}

// route http requests to our handler function
app.use(hello)


// start express web server
app.listen(3000)
console.log('Express is running on Port 3000')