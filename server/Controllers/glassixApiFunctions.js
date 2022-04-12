import axios from 'axios';

const GetGlassixToken = async () => {
  try {
    const res = await axios({
      method: 'post',
      url: 'https://dev.glassix.com/api/v1.2/token/get',
      headers: { 'Content-type': 'application/json' },
      data: {
        apiKey: process.env.APIKEY,
        apiSecret: process.env.APISECRET,
        userName: process.env.USERNAMEDEP,
      },
    })
    console.log('Glassix token renew');
    return res.data.access_token
  } catch (err) {
    console.log('Error GetGlassixToken: ' + err.response.data.message);
  }
}

export { GetGlassixToken };
