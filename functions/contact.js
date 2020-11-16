const nodemailer = require('nodemailer')
require('dotenv').config()

exports.handler = async (event) => {
  const {name, email, message} = JSON.parse(event.body)
  const {EMAIL, PASSWORD} = process.env

  const transporter = nodemailer.createTransport({
    host: 'smtp.poczta.onet.pl',
    port: 465,
    secure: true,
    auth: {
      user: EMAIL, 
      pass: PASSWORD
    }
  })
  
  try {
    await transporter.sendMail({
      from: `CONTACT ${EMAIL}`,
      to: 'jakubjanik00@gmail.com',
      subject: `Message from ${email}`,
      text: `
        ${message}
        from ${name}, ${email}
      `
    })

    return {
      statusCode: 200,
      body: JSON.stringify({message: 'Message sent'})
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({message: 'Failed to send a message'})
    }
  }
}