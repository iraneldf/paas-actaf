'use client';

import styles from "../styles/header.module.css";
import Link from "next/link";
import {usePathname} from 'next/navigation';
import Image from "next/image";
import {useState} from "react";

export type HeaderType = {
    className?: string;
};

const NavBar: ({className}: { className?: any }) => JSX.Element = () => {

    const pathname = usePathname();

    const [show, setShow] = useState(false)

    return (

        <nav className={styles.navbar}>

            <Image
                src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/logo.png`}
                alt={'Logo'}
                objectFit={'cover'}
                width={100}
                height={60}
                priority
                quality={80}
            />


            <ul className={`${styles.nav_links} ${show ? styles.d_none : ''}`}>
                <li><Link
                    href={'/'}
                    className={`${pathname === '/' ? styles.active : ''} `}>
                    ¿Quienes somos?
                </Link></li>
                <li>
                    <Link
                        href={'/proyectos_en_curso'}
                        className={`${pathname === '/proyectos_en_curso/' ? styles.active : ''} `}>
                        Proyectos
                        en curso
                    </Link>
                </li>
                <li>
                    <Link
                        href={'/proyectos_terminados'}
                        className={`${pathname === '/proyectos_terminados/' ? styles.active : ''} `}>
                        Proyectos
                        terminados
                    </Link>
                </li>
                <li>
                    <Link
                        href={'/productos_resultados'}
                        className={` ${pathname === '/productos_resultados/' ? styles.active : ''} `}>
                        Productos y resultados
                    </Link>
                </li>
                <li>
                    <Link
                        href={'/nuestro_equipo'}
                        className={` ${pathname === '/nuestro_equipo/' ? styles.active : ''} `}>
                        Nuestro equipo
                    </Link>
                </li>
                <li>
                    <Link
                        href={'/contactos'}
                        className={` ${pathname === '/contactos/' ? styles.active : ''} `}
                    >
                        Contáctenos

                    </Link>

                </li>
            </ul>

            <div className={styles.menu_toggle} onClick={() => setShow(!show)}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>

            </div>
        </nav>



        // <div className={[styles.header, className].join(" ")}>
        //     <div
        //         style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/logo.png)`}}
        //         className={styles.logo}/>
        //
        //     <div className={styles.aboutProjects}>
        //
        //
        //             <Link
        //                 href={'/proyectos_en_curso'}
        //                 className={`${styles.navItem} ${pathname === '/proyectos_en_curso/' ? styles.active : ''} `}>
        //                 <p>
        //                     Proyectos
        //                     en curso
        //                 </p>
        //             </Link>
        //
        //
        //             <Link
        //                 href={'/proyectos_terminados'}
        //                 className={`${styles.navItem} ${pathname === '/proyectos_terminados/' ? styles.active : ''} `}>
        //                 <p>Proyectos
        //                     terminados</p>
        //             </Link>
        //
        //
        //             <Link
        //                 href={'/productos_resultados'}
        //                 className={`${styles.navItem} ${pathname === '/productos_resultados/' ? styles.active : ''} `}>
        //                 <p>Productos y resultados</p>
        //             </Link>
        //
        //
        //             <Link
        //                 href={'/nuestro_equipo'}
        //                 className={`${styles.navItem} ${pathname === '/nuestro_equipo/' ? styles.active : ''} `}>
        //                 <p>Nuestro equipo</p>
        //             </Link>
        //
        //             <Link
        //                 href={'/contactos'}
        //                 className={`${styles.navItem} ${pathname === '/contactos/' ? styles.active : ''} `}
        //             >
        //                 <p>Contáctenos</p>
        //
        //             </Link>
        //     </div>
        //
        // </div>

    );
};

export default NavBar;