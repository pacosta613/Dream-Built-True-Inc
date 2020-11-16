
//----------------------------------------------------------------------------------------------------------
    //Declariations and libraries
//----------------------------------------------------------------------------------------------------------


   const express                      = require('express');
    const bodyParser                  = require('body-parser');
      const path                           = require('path');     


//----------------------------------------------------------------------------------------------------------
    //App init
//----------------------------------------------------------------------------------------------------------


    const app                         = express();

      app.use(bodyParser.json());

          app.use(bodyParser.urlencoded({
            extended: true
          }));


          app.use(express.static(__dirname + '/public'));

      app.all(/.*/, function(req, res, next) {
        var host = req.header("host");
        if (host.match(/^www\..*/i)) {
          next();
        } else {
          res.redirect(301, "http://www." + host);
        }
      });
  
//----------------------------------------------------------------------------------------------------------
    //App on env port or local port
//----------------------------------------------------------------------------------------------------------

    app.listen(process.env.PORT || 5000);