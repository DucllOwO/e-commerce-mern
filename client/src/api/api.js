import axios from 'axios'

const BASE_URL = 'http://localhost:5000';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjY2YTI4N2Q3NGIzMDc3MWMzZWFiZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjA2MzczMDEsImV4cCI6MTY2MTI0MjEwMX0.GVi5DyhYP5V3KTY2F2yLYTHyru2CY2HVETIwQ_atmIs'

export const publicRequest =  axios.create({
  baseURL: BASE_URL
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
});