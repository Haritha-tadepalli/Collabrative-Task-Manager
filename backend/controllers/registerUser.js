const User = require('../modules/user')

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body
        console.log("requested data", req.body)
        //checks for data entry
        if(!name){
            return (res.json({
                error: "name is required"
            }))
        }
        if(!password || password.length < 8){
            return (res.json({
                error: "Password is required with min lenth of 8 "
            }))
        }
        //to check if email exists already in DB
        const emailExists = await User.findOne({email})
        if(emailExists){
            return res.json({
                error: "Email already exists"
            })
        }
        

        const user = await User.create({
            name, email, password
        })
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

module.exports = registerUser
