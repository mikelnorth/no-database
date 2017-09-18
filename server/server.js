const express = require('express');
const bodyParser = require('body-parser');
const Dogp = require('./controller')
const cors = require('cors')

const app = express();
app.use(cors());
app.use( bodyParser.json() );


app.get('/api/dogs', Dogp.read)


































const port = 3000;
app.listen( port, () => { console.log(`Always watching.... always watching... ${port}.`); } );

