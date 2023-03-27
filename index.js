const express =require('express');
const port = 3000;

const app = express();

app.get('/', (req,res) => res.json([{
    name: 'Kemboi',
    region: "Rift Valley"
}]));

app.listen(port, ()=> console.log(`App listening on port ${port}!`));