const DOWN = 2
const UP = 34

function aleatory(a,b) {
    return Math.round(Math.random()*(b-a)+parseInt(a));
    }

let page = aleatory(DOWN,UP);

const APIHome = ['https://rickandmortyapi.com/api/character/', 'https://rickandmortyapi.com/api/character/?page='+page];
const randomPage = Math.floor(Math.random() * APIHome.length);

const API = APIHome[randomPage];

const getData = async (id) => {
    const apiURL = id ? 'https://rickandmortyapi.com/api/character/'+id : API;
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    }catch (error){
        console.log('Fetch Error', error);
    }
}

export default getData;