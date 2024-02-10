const user = require('../modules/user')

const loginUser = async (req, res) =>{
    try {
        const {email, password} = req.body
        if(!email ){
            return res.json({
                error: "Please enter email"
            })
        }
        if(!password){
            return res.json({
                error: "Please enter password"
            })
        }
        
        const userExists = await user.findOne({email})
        if(!userExists){
            return res.json({
                error: "User does not exists, Please sign up"
            })
        }

        //have to hash passwords and use helpers

        const dbPassword = userExists.password;
        if(dbPassword != password){
            return res.json({
                error: "Wrong password entered"
            })
        }
        res.json("Password Matched")
        


    } catch (error) {
        console.log(error)
    }
}

module.exports = loginUser