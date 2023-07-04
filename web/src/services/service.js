import axios from "axios";
export const setGarage = async () => {
  let config = getConfig('post')
  return await axios.request(config);
};

export const fetchGarageStatus = async () => {
  let config = getConfig('get')
  return await axios.request(config);
};

const getConfig = (method) =>{
return config = {
        method: method,
        maxBodyLength: Infinity,
        url: process.env.public_url react,
        headers: { "Content-Type": "application/json" },
      };
}
