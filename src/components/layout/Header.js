import React from 'react'

const Navlink = [
    {
        id: 1,
        link: "헤더 영역",
    },
    {
        id: 2,
        link: "슬라이드 영역",
    },
    {
        id: 3,
        link: "이미지 영역",
    },
    {
        id: 4,
        link: "컨텐츠 영역",
    },
    {
        id: 5,
        link: "푸터 영역",
    },
]

function Navlinks({id, link}){
    return (
        <>
            <li>
                <a href="/">{link}</a>
            </li>
        </>
    )
}

function Header(props) {
  return (
    <header id="headerType" className={props.fonts}>
        <div className="header__inner">
        <h1 className="header__logo">
            <a href="/">WEB <em>site</em></a>
        </h1>
        <nav className="header__menu">
            <h2 className="ir_so">메인 메뉴</h2>
            <ul>
            {Navlink.map((txt) => (
                <Navlinks 
                    key = {txt.id}
                    link = {txt.link}
                />
            ))}
            </ul>
        </nav>
        <div className="header__member">
            <a href="/">로그인</a>
        </div>
        </div>
    </header>
  )
}

export default Header