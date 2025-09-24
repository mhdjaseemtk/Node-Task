var users = [];


export const userAllGet = (req, res) => {
  res.json(users);
}




export const userById = (req, res) => {
  const { id } = req.params;
  const result = users.find((user) => user.id == id);
  res.json(result);
}



export const createNewUser =  (req, res) => {
  const id = users.length + 1;
  const { name, email } = req.body;
  const user = { id, name, email };
  users.push(user);
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