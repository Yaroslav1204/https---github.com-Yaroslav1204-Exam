const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRouter')
const adminPostRouter = require('./routes/userPostRouter')
const {SERVER_PORT, CONNECTION_STRING} = require('./config/configs')
const cors = require('cors')


  




const app = express()
app.use(cors())



app.use('/api/posts', adminPostRouter)
app.use('/api/admin', userRouter)



const main = async () => {
    await mongoose.connect(CONNECTION_STRING)
    app.listen(SERVER_PORT)
}

main()


process.on("SIGINT", async() => {
      
    await mongoose.disconnect()
    process.exit()
})