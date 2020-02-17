var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vira360sl@gmail.com',
    pass: '***************'
  }
});

var mailOptions = {
  from: 'vira360sl@gmail.com',
  to: 'devinchandula@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

//multiple recievers

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// }

//send html in mail

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   html: '<h1>Welcome</h1><p>That was easy!</p>'
// }

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});