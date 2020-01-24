// const jwt = require('jsonwebtoken');


// const tokencheck = (req, res, next) => {
//     var token = req.headers['authorization'];
//     if(token.startsWith('Bearer')){
//                 token = token.slice(7,token.length);
//     }
//     if(token){
//         token = jwt.verify(token, 'secret', (err, decode) => {
//      if(err){
//             return res.json({message:'token is valide'})
//             }
//             else{
//                 req.decode = decode;
//                 next();
//             }
          
//         });
//     }
//     else{
//         return res.json({message: 'token is not assaigned'})
//     }
// }

// module.exports ={
//     tokencheck
// }