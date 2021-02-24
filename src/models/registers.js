const mongoose =require("mongoose");

const usersSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cnfrmpassword:{
        type:String,
        required:true,
    }
});

const Register =new mongoose.model('Register',usersSchema);

module.exports=Register;