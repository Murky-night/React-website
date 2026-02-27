import styles from './Footer.module.css'

let Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>{new Date().getFullYear()}&copy;</p>
        </footer>
    )
 }
 export default Footer