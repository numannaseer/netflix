import React,{useState,useEffect} from 'react'
import axios from "./axios";
import requests from "./requests";
import "./banner.css"
function Banner() {
    const [movie,setMovie]=useState([]);
    useEffect(() => {
    async function fetchData(){
        const request=await axios.get(requests.fetchNetflixOriginals)
        setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
        return request;
    }
      fetchData();
    }, [])
    // console.log(movie);
    function truncate(str,n){
        return str?.length>n?str.substring(0,n-1)+"...":str;
    }
    return (
        
           <header className='banner' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
           backgroundPosition:"center center"}}>{/*contains a background image*/}
               <div className="banner__contents">
                   <h1 className='banner__title'>{movie?.title|| movie?.name || movie?.original_name}</h1>{/* title */}
             

            <div className="banner__buttons"><button className="banner__button">Play</button><button className="banner__button">My List</button></div>
             <h1 className="banner__description">{truncate(movie?.overview,150)}</h1>{/* description */}
               <div className='banner--fadeBottom' ></div>
               </div>
               </header>
               
         
    )
}

export default Banner;