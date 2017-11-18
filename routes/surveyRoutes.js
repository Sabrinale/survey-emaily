const requireLogin = require('../middlewares/requireLogin');

module.exports =  app => { 
  app.post('app/surveys', requireLogin, (req, res) => {

  });
};