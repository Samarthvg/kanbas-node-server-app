import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameter.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";

export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });

  app.get("/", (req,res) => {
    res.send("Kanbas-node-server-app. Developed by Samarth.")
  })

  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  WorkingWithArrays(app);
}
