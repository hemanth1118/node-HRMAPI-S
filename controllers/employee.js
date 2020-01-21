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
        const name = req.body.name;
        const id = req.params.id;
       
            return employee.update({ 
                name: name
             }, {
        where: {
          id: id
        }
      }).then(employee => {
        res.json({name : name ,id : id});
        console.log(id);
        
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
    }
};