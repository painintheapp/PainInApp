const postmark = require('postmark');
const client = new postmark.Client(process.env.EMAIL_API_KEY);
const email = process.env.EMAIL;
const emailFrom = process.env.EMAIL_FROM;


/************************************************************************************** */
// The function accepts to, from and body params and send sms accordingly.
/* ************************************************************************************ */
const sendEmail = async (to, subject, template) => {
  
    return await client.sendEmail({
      "From" : emailFrom,
      "To": to,
      "subject" : subject,
      "HtmlBody": template
    })
          
   }
  
  //Function exports section 
  
  module.exports = {
    sendEmail
  }