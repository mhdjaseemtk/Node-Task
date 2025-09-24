const admin = {name:'jaseem',email:"jaseem@gmail.com"}

export const logger = (req,res ,next)=>{
     const {name,email} = req.body
     if(admin.name == name && admin.email == email){
 next();
     }else{
 return res.json({message:"failed"})
     }
}