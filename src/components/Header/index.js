import style from "./Header.module.css"

function Header(){
    return (
        <Header className={style.Header}>
            <span>YasFlix</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </Header>
    )
}

export default Header;