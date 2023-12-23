import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGIF from '../Hooks/useGIF';

// get api key from .env file
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

//--
const Random = () => {

    //------------- useGIF hook contain all these---------
    // const [gif, setGif] = useState('');

    // const [loading, setLoading] = useState(false);


    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

    //     // axios is just like fetch. using axios instead of fetch


    //     // data is key in the api responce. just directly extacting it from the response {}
    //     const { data } = await axios.get(url);

    //     const imageSource = data.data.images.downsized_large.url;
    //     //    console.log(imageSource) ;
    //     setGif(imageSource);
    //     setLoading(false);

    // }
    // useEffect(() => {
    //     fetchData();
    // }, [])


    //------------------------------------

    const { gif, loading, fetchData } = useGIF();

    // done in callback 
    // function clickHandler() {

    //     fetchData();
    // }
    return (
        <div className='max-w-1/2 bg-green-600 border border-black rounded-lg flex flex-col items-center gap-y-5 mt-[15px] max-h-[400px] '>


            <h1 className='text-3xl underline uppercase'>Random GIF</h1>

            {
                loading ? (<Spinner />) : (<img src={gif} width="450px" />)
            }



            <button
                className='w-9/12 bg-white opacity-70'
                onClick={() => fetchData()}>Generate</button>
        </div>
    )
}

export default Random