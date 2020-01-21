const companyController = require('../controllers').company;
const employeeController = require('../controllers/employee');
const departmentController = require('../controllers/department');
// const employeeController = require('../controllers/employee');
// const employeeController = require('../controllers').employee;
module.exports = (app) => {
    app.get('/api',(req, res) => res.status(200).send({
        message: 'welcome to the ToDos API',
    }));

    app.post('/api/company',companyController.add);
    app.put('/api/company/:id',companyController.update);
    app.delete('/api/delete/:id',companyController.delete);
    app.get('/api/show',companyController.show);

    // employee table routes
    app.post('/api/employee',employeeController.add);
    app.put('/api/employee/:id',employeeController.update);
    app.delete('/api/employee/:id',employeeController.delete);

    // deparment table routes
    app.post('/api/department',departmentController.post);
    app.get('/api/department',departmentController.show);
    app.put('/api/department/update/:id',departmentController.update)
    app.delete('/api/department/:id',departmentController.delete);

};
