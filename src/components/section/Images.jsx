import React, { useEffect, useState } from 'react'
import Image from '../includes/Image'

function Images() {
    const [ImageTitle, setImageTitle] = useState([]);

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
      // .then((result) => console.log(result.data.ImageTitle))
      .then((result) => setImageTitle(result.ImageTitle))
      .then((error)=>console.log("error", error));
    },[]);

    const [ImageText, setImageText] = useState([]);

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
      // .then((result) => console.log(result.data.ImageText))
      .then((result) => setImageText(result.ImageText))
      .then((error)=>console.log("error", error));
    },[]);

  return (
    <Image ImageTitle={ImageTitle} ImageText={ImageText}/>
  )
}

export default Images