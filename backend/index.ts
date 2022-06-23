import express, { Application, Request, Response } from "express";
import { helloWorld } from "./src/functions/helloWorld";

const app: Application = express();
const port = 8000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.send(helloWorld());
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
    console.log(`click here to view: http://localhost:${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
