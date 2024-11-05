import express from 'express';
import {json} from 'body-parser'

const app = express();
app.use(json())

app.get('/api/users/currentuser', (req, res) => {
    res.send('hi there 😂')
}
)

app.listen(4000, () =>{
    console.log('Server is running on port 4000 !!')
})