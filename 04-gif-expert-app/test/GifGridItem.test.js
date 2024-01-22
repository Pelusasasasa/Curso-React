import { GifGridItem } from "../src/components/GifGridItem";

describe('Probando el grif grid item', () => {

    test('Haciendo match con  el snapchot', () => { 

        const title = 'Saitama';
        const url = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

        const {container} = <GifGridItem title={title} url={url}/>

        expect(container).toMatchSnapshot();


     })


});