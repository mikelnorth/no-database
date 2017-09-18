const axios = require('axios')

module.exports = {
    read: ( req, res ) => {
        
           axios.get('https://dog.ceo/api/breed/bulldog/images').then( response => {
            res.status(200).send( response.data.message );
           })
            
        
        
      }
}