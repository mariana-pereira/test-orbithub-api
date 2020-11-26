import axios from 'axios';

interface Request {
  id: string;
}

interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
}

class ShowBeerService {
  public async execute({ id }: Request): Promise<Beer> {
    const res = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);

    const beer: Beer = res.data[0];

    if(!beer) {
      throw new Error('Beer not found.');
    }

    return beer;
  }
}

export default ShowBeerService;