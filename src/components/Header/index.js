import style from "./Header.module.css"

 function Header(){
    return (
        <><header className={style.header}>
            <span className="{style.span}">YasFlix</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>        
        </>
    )
}

export default Header;