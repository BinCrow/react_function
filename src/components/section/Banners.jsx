import React, { useEffect, useState } from 'react'
import Banner from '../includes/Banner'
// import axios from "axios";

// class Banners extends React.Component {
//   state = {
//     BannerText: [],
//   };
  
//   getBanner = async () => {
//     const {BannerText} = await axios.get(
//         "https://raw.githubusercontent.com/BinCrow/react001json/main/data.json"
//       );
//       console.log(BannerText)
//       // this.setState({BannerText})
//     }

//     componentDidMount() {
//       this.getBanner()
//     }

//     render() {
//       const {BannerText} = this.state
//         return (
//           <>
//                 <section id="bannerType" className="banner__wrap section gmarket">
//     <h2 className="ir_so">배너 영역</h2>
//     <div className="banner__inner">
//       {BannerText.map((txt) => (
//         <Banner
//           key = {txt.id}
//           title = {txt.title}
//           desc = {txt.desc}
//           link = {txt.link}
//           span = {txt.span}
//         />
//       ))}
//     </div>
//   </section>
//               <Banner BannerText = {BannerText}/>
//           </>
//         )
//     }
// }

function Banners() {
  const [BannerText, setBannerText] = useState([]);

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
    // .then((result) => console.log(result.data.BannerText))
    .then((result) => setBannerText(result.BannerText))
    .then((error)=>console.log("error", error));
  },[]);

  return (
    <>
        <Banner BannerText={BannerText}/>
    </>
  )
}


export default Banners