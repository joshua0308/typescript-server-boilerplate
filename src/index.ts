import express, { Request, Response } from "express";

const app = express();
app.use(express.json()); // parses incoming requests with JSON payload

app.get("/", (req: Request, res: Response) => {
  res.json({ foo: "bar" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
