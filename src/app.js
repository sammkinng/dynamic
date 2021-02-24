const express =require('express');
const path=require('path');
const app=express();
const hbs=require('hbs');

require('./db/conn');
const Register =require('./models/registers');

const port=process.env.PORT || 8080;

const static_path=path.join(__dirname,"../public");
const templates_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine",'hbs');
app.set("views",templates_path);
hbs.registerPartials(partials_path);

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/register',(req,res)=>{
    res.render('register');
});

app.post('/register',async(req,res)=>{
    try {
        const password =req.body.password;
        const cnfrmpassword =req.body.cnfrmpassword;
        if(password===cnfrmpassword){
            const registerUser=new Register({
                username:req.body.username,
                password:req.body.password,
                cnfrmpassword:req.body.cnfrmpassword
            });
            const registered=await registerUser.save();
            res.status(201).render('index');

        }else{
            res.send('pw dont match');
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/login',(req,res)=>{
    res.render('login');
});


app.listen(port,()=>{
    console.log(`sucess ho gya bhai ${port}`);
});