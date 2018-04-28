//Import Express
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


//Start the server
app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

//Rout to the index/home page
app.get('/', (req,res)=>{
    res.send("Hello");
})