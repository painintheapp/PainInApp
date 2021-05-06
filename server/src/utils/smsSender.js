const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
const fromNumber = process.env.TWILIO_NO;


/************************************************************************************** */
// The function accepts to, from and body params and send sms accordingly.
/* ************************************************************************************ */
const sendSMS = async (to, body) => {
  let toNumber = "+" + to;
  return await client.messages
    .create({
      to: toNumber,
      from: fromNumber,
      body: body
    })
    .then(message => message.sid);

}

//Function exports section 

module.exports = {
  sendSMS
}