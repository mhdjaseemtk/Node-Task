import express from 'express'
const router = express()
import {userAllGet,userById,createNewUser,deleteUser,updateUser} from '../controllers/userController.js'

router.get('/',userAllGet)
router.get('/:id',userById)
router.post('/',createNewUser)
router.delete('/:id',deleteUser)
router.patch('/:id',updateUser)

export default router

