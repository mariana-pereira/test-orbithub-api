import { Request, Response } from 'express';

import ShowBeerService from '../services/ShowBeerService';

class BeerController {
  public async show (request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const showBeer = new ShowBeerService();

      const beer = await showBeer.execute({ id });

      return response.status(200).json(beer);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default new BeerController();