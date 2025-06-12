import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Banner() {
   const [bannerImage, setBannerImage] = useState('https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68');
   const [title,setTitle] = useState("Placeholder Movie");

   useEffect(()=>{
      async function fetchData() {
        const url ="https://www.omdbapi.com/?s=batman&apikey=1ae7d544&page=1";
        const resp = (await axios.get(url)).data.Search[0];
        console.log("resp==12===",resp);
        setBannerImage(resp.Poster);
        setTitle(resp.Title);
      }
      fetchData();
   },[])

  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
        <div className='text-white w-full text-center   text-3xl'>{title}</div>
    </div>
  );
}

export default Banner;
