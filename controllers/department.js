const department = require('../models').Department;
module.exports ={
    show(req, res) {
        return department.findAll(
            console.log('hemsnht')
        )
        .then(department => {
          res.send(department);
          console.log("All departments:", JSON.stringify(department));
          
        })
        .catch(error => {
            console.log('fgjfhg')
          res.status(400).send(error);
        });
      },
      post(req, res){
          const myname = req.body.name;
          const location =req.body.location;
          return department.create({
              name: myname,
              location: location
          }).then(department => res.status(201).send(department))
          .catch(error => res.status(400).send(error))

},
    update(req, res){
        const myname = req.body.name;
        const id = req.params.id;
        return department.update({
            name: myname,
        },{
            where:{
                id: id
            }
        }
        ).then(department => {
            console.log(res.ison({name: myname,id: id}));
        }).catch(error => res.status(400).send(error))
    },
    delete(req, res){
        const id = req.params.id;
        return department.destroy({
            where:{
                id: id
            }
        }).then(() => {
            res.json({id:id, message:"Deleted department with id"+id});
        })
        .catch(error => res.status(400).send(error));
    }
};