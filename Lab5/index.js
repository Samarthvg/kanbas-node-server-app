import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameter.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";

export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });

  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  WorkingWithArrays(app);

  app.get("/lab5/todos/:id/completed/:completed", (res,req) =>{
    const { id, completed } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    res.json(todo);
  })

}
