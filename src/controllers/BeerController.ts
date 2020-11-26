import { Request, Response } from 'express';

import ShowBeerService from '../services/ShowBeerService';
import ListbeersService from '../services/ListBeersService';

class BeerController {
  public async index (request: Request, response: Response): Promise<Response> {
    try {
      const page = request.query.page as string;
      const perPage = request.query.perPage as string;

      const listBeer = new ListbeersService();

      const beers = await listBeer.execute({ page, perPage });

      return response.status(200).json(beers);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

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