import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ticketRoute from "./Routes/ticket.js";

dotenv.config()
const app = express()

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000

app.use('/ticket', ticketRoute);

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))