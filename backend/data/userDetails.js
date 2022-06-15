import bcrypt from 'bcryptjs'
const users = [
    {
        name:"Admin",
        email:"admin@gmail.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:"Arfin",
        email:"arfin@gmail.com",
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:"Nandhini",
        email:"nanthini@gmail.com",
        password:bcrypt.hashSync('123456',10),
    },
]
export default users;