import  express  from "express";
import bodyParser from "body-parser";
import ejs from "ejs"


const app=express();
const port=3000;


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",(req,res)=>{
    res.render("home.ejs")
});

app.post("/generate",(req,res)=>{
    console.log(req.body);
    
});








app.listen(port,function(){
    console.log(`port is listening on ${port}`);
});
