import React from 'react'
// import axios from "axios";


// const BannerText = [
//   {
//     id: 1,
//     title: "유튜버 웹보이",
//     desc: "더 다양한 강의는 유튜브를 통해 제공하고 있습니다.",
//     link: "youtube.com/c/Webstoryboy",
//     span: "배너 영역01"
//   }
// ]

// class Banner extends React.Component {
//   state = {
//     BannerText: [],
//   };
  
//   getBanner = async () => {
//     const {BannerText} = await axios.get(
//         "https://raw.githubusercontent.com/BinCrow/react001json/main/data.json"
//       );
//       // console.log(BannerText)
//       this.setState({BannerText})
//     }

//     componentDidMount() {
//       this.getBanner()
//     }

//     render() {
//       const {BannerText} = this.state
//         return (
//           <>
//               <Banner BannerText={BannerText}/>
//           </>
//         )
//     }
// }

function Bannerinfo({id, title, desc, link, span}) {
  return (
    <div>
      <h3 className="banner__title">{title}</h3>
      <p className="banner__desc">{desc}
          <a href="/">{link}</a>
      </p>
      <span className="banner__sub">{span}</span>
    </div>
  )
}

function Banner({BannerText}) {
  return (
    <section id="bannerType" className="banner__wrap section gmarket">
    <h2 className="ir_so">배너 영역</h2>
    <div className="banner__inner">
      {BannerText.map((txt) => (
        <Bannerinfo 
          key = {txt.id}
          title = {txt.title}
          desc = {txt.desc}
          link = {txt.link}
          span = {txt.span}
        />
      ))}
    </div>
  </section>
  )
}

export default Banner