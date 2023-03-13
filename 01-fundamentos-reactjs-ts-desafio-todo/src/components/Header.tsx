import styles from './Header.module.css'

import logo from '../../assets/todoLogo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="" />
        </header>
    )
}