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
    update(req, res){
        const name = req.body.name;
        const id = req.params.id;
       
            return Company.update({ 
                name: name
             }, {
        where: {
          id: id
        }
      }).then(company => {
        res.json({name : name ,id : id});
        console.log(id);
        
      })
      .catch(error => res.status(400).send(error))
    },
    
    delete(req, res){
        const id = req.params.id;
        console.log(id)
            return Company.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                console.log("done");
                res.json({id:id, message:"Deleted comapny with id"+id});
            })
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return Company.findAll()
          .then(companies => {
          res.send(companies);
          console.log("All companies:", JSON.stringify(companies));
          
        })
        .catch(error => {
          res.status(400).send(error);
        });
      },

    
    //   User.destroy({
    //     where: {
    //       firstName: "Jane"
    //     }
    //   }).then(() => {
    //     console.log("Done");
    //   });
    //   User.findAll().then(users => {
    //     console.log("All users:", JSON.stringify(users, null, 4));
    //   });
};
