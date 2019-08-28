const CleanCSS = require('clean-css');

exports.handler = function(event, context, callback) {
     var source = `
@import url(https://a80427d48f9b9f165d8d-c913073b3759fb31d6b728a919676eab.ssl.cf1.rackcdn.com/v3/colorbox/colorbox.css);
@import url(https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css);`;

     
new CleanCSS({ inline: ['remote'] }).minify(source, function (error, output) {
         
      // output.styles
     callback(null, {
                statusCode: 200,
                body: JSON.stringify(output)
                });
     
     });
 
              
}