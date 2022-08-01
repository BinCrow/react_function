import React from "react";
import "./App.css";
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Contents from './components/layout/Contents'
import Slider from './components/includes/Slider'
import Images from './components/section/Images'
import ImgTexts from "./components/section/ImgTexts";
import Cards from './components/section/Cards'
import Banners from './components/section/Banners'
import Texts from "./components/section/Texts";

function App() {
  return (
    <>
      <Header />
      <Contents>
        <Slider />
        <Images />
        <ImgTexts />
        <Cards />
        <Banners />
        <Texts />
      </Contents>
      <Footer />
    </>
  )
}


// function App() {
//     return (
//         <>
//           <Main />
//         </>
//       );
// }

export default App;
