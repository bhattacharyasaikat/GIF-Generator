import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGIF from '../Hooks/useGIF';


// get api key from .env file
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

//--
const Tag = () => {
   
  const[tag,setTag] = useState('') ;

    const {gif,loading,fetchData} = useGIF(tag) ;
    function clickHandler() {

        fetchData(tag);
    }

    function changeHandler(event) {
        setTag(event.target.value) ;
    }
    return (
        <div className='max-w-1/2 bg-green-600 border border-black rounded-lg flex flex-col items-center gap-y-5 max-h-[400px] mt-[200px]'>


            <h1 className='text-3xl underline uppercase'>Random {tag} GIF</h1>

            {
                loading ? (<Spinner />) : (<img src={gif} width="450" />)
            }


            <input
            className='w-10/12 text-lg py-2 rounded-lg mb-[20px] text-center'
            onChange={changeHandler}
            value={tag}
            />
            <button
                className='w-9/12 bg-white opacity-70'
                onClick={clickHandler}>Generate</button>
        </div>
    )
}

export default Tag