import './header.css'
import logo from './logo.png'

console.log(logo)

function Header() {
    return <header className={'header'}>
        <div className={"header-wrapper"}>
            <div className={"logo-wrapper"}>
                <div className={'logo-image'}>
                    <img src={logo} alt="logo"/>

                </div>
            </div>
            <nav className={"menu"}>
                <a href="main">Главная</a>
                <a href="Technologies">Технологии</a>
                <a href="Chart">График полетов</a>
                <a href="Guaranties">Гарантии</a>
                <a href="About">О Компании</a>
                <a href="Contacts">Контакты</a>
            </nav>

        </div>

    </header>
}

export default Header
