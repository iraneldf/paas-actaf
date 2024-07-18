'use client';
import type {NextPage} from "next";
import styles from "../styles/header.module.css";
import Link from "next/link";
import {usePathname} from 'next/navigation';

export type HeaderType = {
    className?: string;
};

const Header: NextPage<HeaderType> = ({className = ""}) => {

    const pathname = usePathname();
    return (
        <div className={[styles.header, className].join(" ")}>
            <div className={styles.logo}/>
            <div className={styles.aboutProjectsWrapper}>
                <div className={styles.aboutProjects}>
                    <Link href={'/'} className={`${styles.quinesSomos} ${pathname === '/' ? styles.active : ''} `}>¿Quiénes
                        somos?</Link>
                    <Link href={'proyectos_en_curso'}
                          className={`${styles.proyectosEnCurso} ${pathname === '/proyectos_en_curso' ? styles.active : ''} `}>Proyectos
                        en curso</Link>
                    <Link href={'proyectos_terminados'}
                          className={`${styles.proyectosTerminados} ${pathname === '/proyectos_terminados' ? styles.active : ''} `}>
                        Proyectos
                        terminados</Link>
                    <Link href={'productos_resultados'}
                          className={`${styles.productosYResultados} ${pathname === '/productos_resultados' ? styles.active : ''} `}>
                        Productos y resultados del Programa
                    </Link>
                    <Link href={'contactos'}
                          className={`${styles.contactos} ${pathname === '/contactos' ? styles.active : ''} `}
                    >Contactos</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;