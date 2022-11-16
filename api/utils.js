let url;
if (process.env.NODE_ENV) {
  url = "http://localhost:3001";
} else {
  url = "https://sintetico.herokuapp.com"
}