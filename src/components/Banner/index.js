import styles from "./Banner.module.css"

function Banner({ image }) {
    return(
        <div className={styles.banner}
            style={{ backgroundImage:`url('/images/banner-${image}.png')` }} 
            // nao esquece da crase depois de por a imagem dinamica 
            >
        </div>
    )
}

export default Banner;