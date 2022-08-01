import React, { useEffect, useState } from 'react'
import Text from '../includes/Text'

function Texts() {
    const [TextTitle, setTextTitle] = useState([]);

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
      // .then((result) => console.log(result.data.TextTitle))
      .then((result) => setTextTitle(result.TextTitle))
      .then((error)=>console.log("error", error));
    },[]);

    const [Textinfo, setTextinfo] = useState([]);

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
      // .then((result) => console.log(result.Textinfo))
      .then((result) => setTextinfo(result.Textinfo))
      .then((error)=>console.log("error", error));
    },[]);

    return (
        <Text TextTitle={TextTitle} Textinfo={Textinfo}/>
    )
}



export default Texts