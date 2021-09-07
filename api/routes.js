'use strict';
module.exports = function(app) {
  var imgCtrl = require('./controllers/ImagesController');
	
	app.route('/images')
		.post(imgCtrl.getBase64)
		.get(imgCtrl.getBase64);

};
