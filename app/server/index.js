const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const api = require('./api')

const app = express()
const port = process.env.PORT || 3000

app.use(cors({credentials: true, origin: 'localhost:8080'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/patients', api.getPatients)


app.listen(port, () => {
	console.log(`Server listening on PORT ${port}`);
})
