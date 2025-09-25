import express from 'express'
import {mongodbconnection} from './utility/mongodb.js'
const app = express()
const user = {
    emaildb:"jaseem@gmail.com",passworddb:"123"
}


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.set("view engine",'ejs')
mongodbconnection()
app.get('/',(req,res)=>{
res.render('index',{user})
})
 

app.get('/card',(req,res)=>{

res.render('Card',{user})
})

app.get('/form',(req,res)=>{

res.render('form')
})

app.post('/login',(req,res)=>{

 const {email,password} = req.body
 console.log(password,user.passworddb);
 


if(user.emaildb == email && user.passworddb == password){

    return res.render('Card',{email,password})
  
 }
 res.send("erorr")

 

})
app.listen(3000) 