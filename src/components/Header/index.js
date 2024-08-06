import styles from "./Header.modules.css"

function Header(){
    return (
        <Header className={style.header}>
            <span>YasFlix</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </Header>
    )
}

export default Header;