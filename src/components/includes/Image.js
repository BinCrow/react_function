import React from 'react'

// const ImageTitle = [
//     {
//         id: 1,
//         title: "포트폴리오가 실력이다.",
//         desc: "이미지 유형입니다. 마우스 오버시 자세한 정보가 나와는 구조입니다.",
//     }
// ]

// const ImageText = [
//     {
//         id: 1,
//         title: "애교만점 웰시코기",
//         desc: "제목은 넥슨 풋볼 고딕 폰트입니다.<br/>설명부분은 넥슨 LV1 고딕 16px 140% 입니다.",
//         link: "자세히 보기",
//         image: "assets/img/image_bg01.jpg",
//         alt: "애교만점 웰시코기",
//     },
//     {
//         id: 2,
//         title: "코카스 파니엘",
//         desc: "제목은 넥슨 풋볼 고딕 폰트입니다.<br/>설명부분은 넥슨 LV1 고딕 16px 140% 입니다.",
//         link: "자세히 보기",
//         image: "assets/img/image_bg02.jpg",
//         alt: "코카스 파니엘",
//     },
// ]

function Imaget({title, desc}){
    return(
        <div className='title__wrap'>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

function Imageinfo ({id, title, desc, link, image, alt}){
    return (
        <article className="image">
            <div className="image__header">
                <figure className="image__figure">
                    <img src={image} alt={alt}/>
                </figure>
            </div>
            <div className="image__body">
                <h3 className="image__title">{title}</h3>
                <p className="image__desc">{desc}</p>
                <a href="/" className="image__btn">{link}</a>
            </div>
        </article>
    )
}

function Image({ImageTitle, ImageText}) {
  return (
    <section id="imageType" className="image__wrap section nexon">
        {ImageTitle.map((txt) => (
            <Imaget 
                key = {txt.id}
                title = {txt.title}
                desc = {txt.desc}
            />
        ))}
    <div className="image__inner container">
        {ImageText.map((txt) => (
            <Imageinfo 
                key = {txt.id}
                title = {txt.title}
                desc = {txt.desc}
                link = {txt.link}
                image = {txt.image}
                alt = {txt.alt}
            />
        ))}
    </div>
</section>
  )
}

export default Image