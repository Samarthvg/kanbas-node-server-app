import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameter.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";

export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });

  app.get("/", (res,req) => {
    res.send(<h2>Kanbas-node-server-app developed by Samarth.</h2>)
  })

  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  WorkingWithArrays(app);
}
