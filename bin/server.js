const app = require("../app");
const db = require("../config/db");

const PORT = process.env.PORT || 5000;

db
 .then(() => {
  app.listen(PORT, () => {
   console.log(`Server running. Use our API on port: ${PORT}`);
  });
 })
 .catch((err) => {
  console.log(`Server not runed. Error: ${err.message}`);
 });
