import {useState,useEffect} from 'react';
import Axios from 'axios';

const key = process.env.REACT_APP_UNSPLASH_KEY;
const api = process.env.REACT_APP_UNSPLASH_API;

export default function useFetchImage(page,SearchItem) {

const [Images, setImages] = useState([]);

const [Errors, setErrors] = useState([]);

const [IsLoading, setIsLoading] = useState(false);


function fetch(){
const url = SearchItem === null ? "photos?" : `search/photos?query=${SearchItem}&`;
    Axios.get(`${api}/${url}client_id=${key}&page=${page}`)
      .then((res) => {
        SearchItem === null ? fetchRandom(res) : fetchSearch(res);
        setIsLoading(false);
      })
      .catch((e) => {
        setErrors(["Unable to fetch images"]);
        setIsLoading(false);
      });
}

function fetchSearch(res) {
    page > 1
      ? setImages([...Images, ...res.data.results])
      : setImages([...res.data.results]);
}

function fetchRandom(res) {
    setImages([...Images, ...res.data]);
}

useEffect(() => {
setIsLoading(true);
fetch();
}, [page,SearchItem]);

return [Images, setImages, Errors , IsLoading];
}
