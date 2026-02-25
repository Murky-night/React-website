import styles from './Footer.module.css'

let Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>{new Date().getFullYear()}&copy; Your website name</p>
        </footer>
    )
 }
 export default Footer