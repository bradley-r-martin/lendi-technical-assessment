const mailgun = require("mailgun-js");

const send = (email) =>{
  return new Promise((success,reject)=>{
    const { MAILGUN_API_KEY, MAILGUN_DOMAIN } = process.env;
    const mg = mailgun({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN });
    const data = {
      from: `Mailgun Sandbox <postmaster@${MAILGUN_DOMAIN}>`,
      ...email
    };
    mg.messages().send(data, function (error) {
      if(error){
        reject(error);
      }else{
        success();
      }
    });
  });
}

module.exports = send;