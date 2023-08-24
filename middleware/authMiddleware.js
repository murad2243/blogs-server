const jwt = require("jsonwebtoken")

const authMiddleware =  (req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        // console.log(token);
        if(token){
            const decode =  jwt.verify(token, "code07") 
            // console.log(decode);
            if(decode){
                next()
            }
        }
        
        else{
            res.send("invalid token")
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = authMiddleware