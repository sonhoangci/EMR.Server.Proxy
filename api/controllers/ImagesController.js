'use strict'

const util = require('util')
var base64Img = require('base64-img');


module.exports = {
	getBase64: (req, res) => {
		//console.log(req);
		var $path = req.query.path;
		var $output = req.query.output;
		let imageUrl = $path;

		base64Img.requestBase64(imageUrl, function (err, re, body) {
			var content = "";
			if (err) {
				//res.json('')
				console.log(err)
			}
			else {
				//console.log(res)
				//console.log(body)  
				content = body;
				
			}
			if ($output == 'image'){
				let base64Image = content.split(';base64,').pop();
				var img = Buffer.from(base64Image, 'base64');
				res.writeHead(200, {
					'Content-Type': 'image/png',
					'Content-Length': img.length,
					"Access-Control-Allow-Origin": '*'
				});
				res.end(img); 
			}else{
				var response = {'content':content};
				res.json(response)
			}
			
			
		});

		
		
		
		//download
		
		
	}
    
}