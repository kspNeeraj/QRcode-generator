import  express  from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import ejs from "ejs";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const app=express();
const port=3000;

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",(req,res)=>{
    res.render("home.ejs")
});

app.post("/generate",(req,res)=>{
    
    var qr_svg = qr.image(req.body.data , { type: 'png' });
    qr_svg.pipe(fs.createWriteStream( __dirname +'/public/images/'+'new_qr.png'));
    res.redirect("/");
});








app.listen(port,function(){
    console.log(`port is listening on ${port}`);
});
