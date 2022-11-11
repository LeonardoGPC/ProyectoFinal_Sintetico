let url;
if (process.env.NODE_ENV) {
  url = "https://sintetico.herokuapp.com/";
} else {
  url = "http://localhost:3001";
}