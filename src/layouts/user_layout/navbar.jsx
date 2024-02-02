import Link from "next/link";
import { TbUser, TbLogout2 } from "react-icons/tb";

import Dropdown from "@components/Elements/Dropdown";

import styles from "./styles.module.scss";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.brand}>
                        <img src="/img/logo.webp" alt="Logo" />
                    </div>
                    <div className={styles.menu}>
                        <Link href={"/dashboard"}>
                            <a>Dashboard</a>
                        </Link>
                        <Link href={"/users"}>
                            <a>Usuarios</a>
                        </Link>
                        <Link href={"/orders"}>
                            <a>Ordenes</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.widgets}></div>
                    <Dropdown 
                        title={
                            <div className={styles.profile}>
                                <img src="https://ui8-bitcloud.herokuapp.com/img/content/avatar-user.jpg" alt="Avatar" />
                            </div>
                        }
                    >
                        <div className={styles.profile_dropdown}>
                            <div className={styles.item}>
                                <div className={styles.icon}><TbUser /></div>
                                <div className={styles.title}>
                                    <span>Ajustes</span>
                                    <span>Configuración adicionales de la plataforma</span>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.icon}><TbLogout2 /></div>
                                <div className={styles.title}>
                                    <span>Cerrar Sesión</span>
                                </div>
                            </div>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </nav>
    )
}