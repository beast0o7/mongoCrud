const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017/basicCrud";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log('connected'))
    .catch(e=>console.log(e));
}
module.exports = connectToMongo;