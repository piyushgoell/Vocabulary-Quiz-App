const PORT = 8000
const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()


const app = express()
app.use(cors())

app.get('/results', (req,res) => {
    const level = req.query.level;
    const area = req.query.area;
    
    const options = {
        method: 'GET',
        url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
        params: { level, area },
        headers: {
            'x-rapidapi-host': 'twinword-word-association-quiz.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPID_API_KEY
        }
    };

     axios.request(options).then((response) => {
       res.json(response.data)
     }).catch((error) => {
       console.error(error);
     });

})

app.listen(PORT,() => console.log(`Server is listening on ${PORT}`))