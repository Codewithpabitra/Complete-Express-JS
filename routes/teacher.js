import express from "express";

const teacherRouter = express.Router();

teacherRouter.get("/all", (req, res) => {
  res.send("All the teachers");
});

teacherRouter.post("/create", (req, res) => {
  res.send("Created a teacher");
});

teacherRouter.put("/update", (req, res) => {
  res.send("Updated teacher");
});

teacherRouter.delete("/delete", (req, res) => {
  res.send("Remove teacher from the DB");
});

export default teacherRouter;
