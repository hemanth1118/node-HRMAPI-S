const companyController = require('../controllers').company;
const employeeController = require('../controllers/employee');
const departmentController = require('../controllers/department');
const jwtController = require('../controllers/user');
const middlewarController = require('../controllers/middleware');
const jwt = require('jsonwebtoken');

const token1 = (req, res, next) => {
    var token = req.headers['authorization'];
    if(token.startsWith('Bearer')){
                token = token.slice(7,token.length);
    }
    if(token){
        token = jwt.verify(token, 'secret', (err, decode) => {
     if(err){
            return res.json({message:'token is valide'})
            }
            else{
                req.decode = decode;
                next();
            }
          
        });
    }
    else{
        return res.json({message: 'token is not assaigned'})
    }
}

module.exports = (app) => {
    app.get('/api',(req, res) => res.status(200).send({
        message: 'welcome to the ToDos API',
    }));

    app.post('/api/company',companyController.add);
    app.put('/api/company/:id',companyController.update);
    app.delete('/api/delete/:id',companyController.delete);
    app.get('/api/show',companyController.show);

    // employee table routes

    app.post('/api/employee',token1,employeeController.add);
    app.put('/api/employee/:id',employeeController.update);
    app.delete('/api/employee/:id',employeeController.delete);
    app.get('/api/get',employeeController.getEmployee)

    // deparment table routes

    app.post('/api/department',token1,departmentController.post);
    app.get('/api/department',departmentController.show);
    app.put('/api/department/update/:id',token1,departmentController.update)
    app.delete('/api/department/:id',token1,departmentController.delete);

    // jwt routes
    
    app.post('/api/jwt',jwtController.add);
    app.get('/api/login',jwtController.getUserById);
    // app.get('/api/protected',jwtController.secure)

    app.get('*',(req,res) => res.status(200).send({
        message: 'welcome to the beginning of nothingness.',
    }));

};
