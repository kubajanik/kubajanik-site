const nodemailer = require('nodemailer')
require('dotenv').config()

exports.handler = async (event) => {
  const {name, email, message} = JSON.parse(event.body)
  const {CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, ACCESS_TOKEN} = process.env

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: 'jakubjanik00@gmail.com',
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN,
      expires: 3599
    }
  })
  
  try {
    await transporter.sendMail({
      from: `CONTACT jakubjanik00@gmail.com`,
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
      body: JSON.stringify({err, message: 'Failed to send a message'})
    }
  }
}