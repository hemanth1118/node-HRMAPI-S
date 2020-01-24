const user = require('../models').user;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
module.exports = {
    
    add(req , res){
        
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);
        const email = req.body.email;
        const password = hashedPassword;
        // const myuser = {
        //     email,
        //     password
        // }
        console.log(password);
        return user.create({

            email: email,
            password: password,
            })
        .then(user => { 
            res.send("user credentials are added")
            })
            .catch(err => {
                res.send("error")
            })
        
       
        .catch(error => res.status(400).send(error))
      },

    //    hemath(err, user) {
    //     if (err) return res.status(500).send("There was a problem registering the user.")
    //     // create a token
    //     var token = jwt.sign({ email: email }, 'secretkey', {
    //       expiresIn: 86400 // expires in 24 hours
    //     });
    //     res.status(200).send({ auth: true, token: token });

    //   },
        
    


      getUserById(req, res){
          const email = req.body.email;
          const password = req.body.password;
          const myuser = {
                email,
                password
              }
             
          return user.findOne({
              where:{
                email: email
              }
             
          }).then(user => {
              if(email != email){
                  res.send("invalid user")
              }
              else{
                  bcrypt.compare(password,user.password,function(err,user){
                      if(user==true)
                      {
                        const token = jwt.sign(myuser, "secret", {})
                        res.json({token})
                      }
                      else{
                          res.send("incorrect password")
                      }

                  })
              }
          });
          
        }
    }