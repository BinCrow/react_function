import React, { useEffect, useState } from 'react'
import Card from '../includes/Card'

function Cards() {
    const [CardTitle, setCardTitle] = useState([]);

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
      // .then((result) => console.log(result.data.CardTitle))
      .then((result) => setCardTitle(result.CardTitle))
      .then((error)=>console.log("error", error));
    },[]);

    const [CardText, setCardText] = useState([]);

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
      // .then((result) => console.log(result.data.CardText))
      .then((result) => setCardText(result.CardText))
      .then((error)=>console.log("error", error));
    },[]);

  return (
    <Card CardTitle={CardTitle} CardText={CardText}/>
  )
}

export default Cards