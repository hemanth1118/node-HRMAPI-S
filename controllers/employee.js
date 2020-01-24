const employee = require('../models').Employee;
module.exports = {
    add(req , res){
        const myname = req.body.name;
        // const mydob = req.body.dob;
        return employee.create({
            name: myname,
            // dob: mydob,
        })
        .then(employee => res.status(201).send(employee))
        .catch(error => res.status(400).send(error))
    },
    update(req, res){
        const myname = req.body.name;
        console.log(myname);
        const id = req.params.id;
        const companyId = req.body.companyId
       
       
            return employee.update({ 
                name: myname,
                companyId: companyId
             }, {
        where: {
          id: id
        }
      }).then(employee => {
        res.json({id : id, name: myname,companyId: companyId});
        console.log(name);
        
      })
      .catch(error => res.status(400).send(error))
    },
    delete(req, res){
        const id = req.params.id;
        return employee.destroy({
            where:{
                id: id
            }
        }).then(() => {
            res.json({id:id, message:"Deleted employee with id"+id});
        })
        .catch(error => res.status(400).send(error));
    },
    getEmployee(req, res) {
        return employee.findAll()
          .then(employee => {
          res.send(employee);
          console.log("All companies:", JSON.stringify(employee));
          
        })
        .catch(error => {
          res.status(400).send(error);
        });
      },

};