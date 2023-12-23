import React from 'react'
import axios from 'axios';

import { useState } from 'react';
import { useEffect } from 'react';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGIF = (tag) => {
    const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}` ;
    const tagURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}` ;
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);


    async function fetchData(tag) {
        setLoading(true);
        // axios is just like fetch. using axios instead of fetch
        // data is key in the api responce. just directly extacting it from the response {}
        const { data } = await axios.get(tag ? tagURL:randomurl);

        const imageSource = data.data.images.downsized_large.url;
        //    console.log(imageSource) ;
        setGif(imageSource);
        setLoading(false);

    }
    useEffect(() => {
        fetchData();
    }, [])
   
   return {gif,loading,fetchData} ;
}

export default useGIF