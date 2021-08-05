const http = require('http');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8000
app.use(cors());
app.use(bodyParser.json());
app.options('*', cors());


app.get('/', (req, res) => {
  res.send('Hello from node.js!!!')
})

app.post('/getcards', (req,res) => {
	console.log(req.body.url)
	const targetURL = req.body.url

	axios.get(targetURL)
		.then(response => {
			res.send(response.data)
		})
		.catch(error => {
			const errorText = {
				errorText: 'Целевой сервер не отвечает',
				error: error
			}
			res.send(errorText)
		})

	
})

app.listen(PORT, () => {
        console.log('Server has been started!');
})