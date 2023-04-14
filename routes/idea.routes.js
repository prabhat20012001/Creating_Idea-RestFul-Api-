// define route for the calls like

const ideaController = require("../controllers/idea.controller");

module.exports = (app) => {
  app.get("/ideas", ideaController.fetchAllIdeas);

  app.post("/ideas",ideaController.ceateIdea);

  app.put("/ideas/:id",ideaController.updateIdea);
  app.delete("/ideas/:id",ideaController.deleteIdea);
};
