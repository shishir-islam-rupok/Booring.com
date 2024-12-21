import cat from './images/cat.jpeg';

const assets = {
    images: {
        cat: new URL('./images/cat.jpeg', import.meta.url).href
    },
    fonts: {
        inter: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
    }
};

export const imageMap = {
    cat: Array(6).fill(new URL('./images/cat.jpeg', import.meta.url).href)
};

export default assets;