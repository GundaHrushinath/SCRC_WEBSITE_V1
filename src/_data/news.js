// const axios = require("axios");
// require('dotenv').config();
// const url = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed&pageSize=5"
// const url1 = "https://newsapi.org/v2/everything?q=tesla&from=2022-05-28&sortBy=publishedAt&apiKey=929e4f682333486f9b9e67c358bcd8a9&pageSize=5"
// module.exports = async function() {
//     try {
//     //   const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-05-28&sortBy=publishedAt&apiKey=${process.env.API_KEY}&pageSize=5'); // Problem with this snippet: ${process.env.API_KEY}
//     const response = await axios.get(url);
//     console.log(response.data);
//       return response.data;
//     } catch (error) {
//       console.error(error);
//     }
//   };