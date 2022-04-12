import { GetGlassixToken } from "./GlassixApiFunctions.js";

export const createTicket = (req, res) => {
  const {clientName, phoneNumber} = req.body
    //Complete the code here

    res.status(200).send('Success');
  };
