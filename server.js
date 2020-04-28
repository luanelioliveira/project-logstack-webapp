const sslRedirect = require('heroku-ssl-redirect')
const express = require('express')
const path = require('path')
const router = express.Router()

const app = express()
const port = process.env.PORT || 5000

router.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.use(sslRedirect())
app.use(express.static(path.join(__dirname, 'dist')))

app.use('/', router)
app.listen(port)

// eslint-disable-next-line no-console
console.log('server started ' + port)
