const companyController = require('../controllers').company;

module.exports = (app) => {
    app.get('/api',(req, res) => res.status(200).send({
        message: 'welcome to the ToDos API',
    }));

    app.post('/api/company',companyController.add);
    app.delete('api/user', )
};