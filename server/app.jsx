const express = require('express');
const nodemailer = require('nodemailer');
const cors = require("cors");
const app = express();
const port = 5000


app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});


function sendEmail({ recip_name, recip_email, recip_message, recip_phone }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'runyararo7artwell@gmail.com',
        pass: 'ovxf lqtv hldu vtqm'
      }
    });
    const mail_configs = {
      from: recip_email,
      to: 'runyararo7artwell@gmail.com',
      subject: 'Customer Services',
      text: recip_message,
      html: `<!DOCTYPE html>
            <html lang="en" >
            <head>
              <meta charset="UTF-8">
              <title>Micfix Engineering</title>
              
            </head>
            <body>
            <!-- partial:index.partial.html -->
            <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
              <div style="margin:50px auto;width:70%;padding:20px 0">
                <div style="border-bottom:1px solid #eee">
                  <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Micfix Engineering</a>
                </div>
                <p style="font-size:1.1em">Hi,</p>
                <p>${recip_message}.</p>
                <p>Client phone number: ${recip_phone}</p>
                <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${recip_name}</h2>
                <p style="font-size:0.9em;">Regards,<br />Koding 101</p>
                <hr style="border:none;border-top:1px solid #eee" />
                <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                  <p>Micfix Engineering Pvt Ltd</p>
                  <p>489, Nyabira Shopping Centre Nyabira</p>
                  <p>Zimbabwe</p>
                </div>
              </div>
            </div>
            <!-- partial -->
              
            </body>
            </html>`,
    }
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `Couldn't send email` });
      }
      return resolve({ message: `Sent email` });
    });
  })
}

app.get('/', (req, res) => {
  sendEmail()
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message));
});

app.post('/send_email', (req, res) => {
  sendEmail(req.body)
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log('listening on port at:http://localhost: ' + port);
});