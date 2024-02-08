import {Request, Response } from "express";
import axios, {AxiosResponse} from "axios";

export class NasaController {
    private API_KEY: string;
    constructor(apiKey :string) {
        this.API_KEY = apiKey;

}


public async getNasa (req: Request , res : Response): Promise<void>{
    const dateImage:  string = req.params.dateImage;
    try{
        const response: AxiosResponse = await axios.get(
           `https://api.nasa.gov/planetary/earth/imagery?date=${dateImage}&api_key=${this.API_KEY}`
        );
        const  data = response.data;
        res.json(data);    
    }catch (error){
        res
        .status(500)
        .json({error:"Erreur lors de la récupération des données Nasa"});
    }
    
}
public async getNasaByCoordinates(req: Request, res: Response): Promise<void> {
    const longitude: string = req.params.longitude; 
    const latitude: string = req.params.latitude; 

    try {
        const response: AxiosResponse = await axios.get(
           `https://api.nasa.gov/planetary/earth/imagery?key=${this.API_KEY}&lon=${longitude}&lat=${latitude}`
        );
        const data = response.data;
        res.json(data);
    } catch (error) {
        res
        .status(500)
        .json({error: "Erreur lors de la récupération des données NASA"});
    }
}
}