import { heroes } from "../data/heros";


export const getHerosByPublisher = ( publisher ) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];
    if (!validPublisher.includes(publisher)) {
        throw new Error( `Publisher ${publisher} no existe`);
    };

    return heroes.filter( hero => hero.publisher === publisher);

};