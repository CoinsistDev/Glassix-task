import express from 'express'
import { createTicket } from '../Controllers/ticket.js'

const router = express.Router()

router.post('/', createTicket);


export default router