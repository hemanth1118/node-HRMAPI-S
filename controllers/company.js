const Company = require('../models').Company;
module.exports = {
    add(req , res){
        const myname = req.body.name;
        const mydob = req.body.dob;
        return Company.create({
            name: myname,
            dob: mydob,
        })
        .then(company => res.status(201).send(company))
        .catch(error => res.status(400).send(error))
    },
};
// User.destroy({
//     where: {
//       firstName: "Jane"
//     }
//   }).then(() => {
//     console.log("Done");
//   });