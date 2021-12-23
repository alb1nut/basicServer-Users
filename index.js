const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const { json } = require('express');

//const basicServerRoutes = require("./routes/basicServerRoutes")

const app = express();

const PORT = 6000;
app.use(cors());
app.use(json());
app.get('/', (req, res) => res.send('Hello from homepage.'));

//app.use("/basicServer", basicRoutes);
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));


const dbURI = "mongodb+srv://al_dov:0203754879@cluster1.zlsy5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result) {
        console.log('MongoDB is connected');
    })
    .catch((err) => console.log(err));