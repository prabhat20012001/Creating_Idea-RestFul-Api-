const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("inside middle ");

  next();
});

require("./routes/idea.routes")(app);

app.listen(8080, () => {
    
  console.log("server has started at 8080..");
});
