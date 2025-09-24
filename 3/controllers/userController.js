import {getcoll} from  '../mongodb.js'

var users = [];

 const coll =  getcoll()

export const userAllGet = async (req, res) => {
 let result =  await coll.find().toArray()
 
  res.json(result);
}




export const userById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  
  const mid = await coll.findOne({id:id})
  
  const result = users.find((user) => user.id == id);
  res.json(mid);
}



export const createNewUser = async  (req, res) => {
  const id = users.length + 1;
  const { name, email } = req.body;
  const user = { id, name, email };
  users.push(user);
  console.log(coll);
  
  await coll.insertOne(user)

  res.send("complete");
}



export const deleteUser =  (req, res) => {
  const { id } = req.params;
  const sid = parseInt(id);
  users = users.filter((ele) => ele.id !== sid);
  res.json(users);
}

export const updateUser = (req,res)=>{
  const {id} = req.params
  const sid = parseInt(id)
  const {name,email} = req.body
  let  user = users.find((ele)=>ele.id == sid)
  if(!user){ return res.status(404).json({message :"user not fount"})
  }
user.name = name
user.email = email
  res.json(user)
}