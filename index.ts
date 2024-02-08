import express, { Request, Response } from "express";
import { NasaController } from "./controller/nasaController";

const app = express();
const API_KEY = "75BS46HFX42wQEbFxa5cBFQvVnMTqLVIbn36L0dC";
const nasaController = new NasaController(API_KEY);

app.get("/test", (req: Request, res: Response) => {
    res.send ("Hello, voici l'API NASA");
});

app.get("/nasa/:dateImage", async (req:Request, res:Response) => {
    await nasaController.getNasa(req, res);
});

app.get("/nasa/:lon", async (req:Request, res:Response) => {
    await nasaController.getNasa(req, res);
});

app.get("/nasa/:lat", async (req:Request, res:Response) => {
    await nasaController.getNasa(req, res);
});

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.listen(PORT, () => {
    console.log (`le serveur est en cours d'éxecution sur le port ${PORT}`) 
});