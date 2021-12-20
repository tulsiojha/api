var admin = require("firebase-admin");

var serviceAccount = require("./firebase.json");


const init = ()=>{
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
}

module.exports = {
    init
}