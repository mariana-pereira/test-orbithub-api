import axios from 'axios';

interface Request {
  page: string;
  perPage: string;
}

interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
}

class ListBeersService {
  public async execute({ page, perPage }: Request): Promise<Beer[]> {
    const res = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`
      );

    const beers: Beer[] = res.data;

    if(!beers) {
      throw new Error('Error retrieving beers.');
    }

    return beers;
  }
}

export default ListBeersService;