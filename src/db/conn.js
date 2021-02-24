const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/formdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log('coneection success');
}).catch((e)=>{
    console.log(e);
});