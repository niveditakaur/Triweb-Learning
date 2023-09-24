const express = require('express');
const calculatorRouter = require('./routers/calculator');

const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("I am response");
});

app.use('/calculator', calculatorRouter);

app.listen(3000);