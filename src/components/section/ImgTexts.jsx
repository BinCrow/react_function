import React, { useEffect, useState } from 'react'
import ImgText from '../includes/ImgText'

function ImgTexts() {
    const [ImgTexts, setImgTexts] = useState([]);

    useEffect(() => {
      const requsetOption = {
        method:"GET",
        redirect: "follow",
      };
      fetch (
        "https://raw.githubusercontent.com/BinCrow/react001json/main/data.json",
        requsetOption
      )
      .then((response) => response.json())
      // .then((result) => console.log(result.data.ImgTexts))
      .then((result) => setImgTexts(result.ImgTexts))
      .then((error)=>console.log("error", error));
    },[]);

    return (
        <ImgText ImgTexts={ImgTexts}/>
    )
}

export default ImgTexts