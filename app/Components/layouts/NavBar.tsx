'use client';
import type { NextPage } from "next";
import styles from "../styles/header.module.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export type HeaderType = {
    className?: string;
};

const NavBar: NextPage<HeaderType> = ({ className = "" }) => {

    const pathname = usePathname();
 
    return (
        <div className={[styles.header, className].join(" ")}>
            <div
                style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/logo.png)` }}
                className={styles.logo} />

            <div className={styles.aboutProjects}>

                <Link
                    href={'/'}
                    className={`${styles.navItem} ${pathname === '/' ? styles.active : ''} `}>
                    ¿Quiénes somos?
                </Link>
                <Link
                    href={'/proyectos_en_curso'}
                    className={`${styles.navItem} ${pathname === '/proyectos_en_curso/' ? styles.active : ''} `}>Proyectos
                    en curso
                </Link>
                <Link
                    href={'/proyectos_terminados'}
                    className={`${styles.navItem} ${pathname === '/proyectos_terminados/' ? styles.active : ''} `}>
                    Proyectos
                    terminados
                </Link>
                <Link
                    href={'/productos_resultados'}
                    className={`${styles.navItem} ${styles.productosResultados} ${pathname === '/productos_resultados/' ? styles.active : ''} `}>
                    Productos y resultados del Programa
                </Link>
                <Link
                    href={'/nuestro_equipo'}
                    className={`${styles.navItem} ${pathname === '/nuestro_equipo/' ? styles.active : ''} `}>
                    Nuestro equipo
                </Link>
                <Link
                    href={'/contactos'}
                    className={`${styles.navItem} ${pathname === '/contactos/' ? styles.active : ''} `}
                >Contáctenos
                </Link>

            </div>


        </div>

    );
};

export default NavBar;