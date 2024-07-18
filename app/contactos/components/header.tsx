import type { NextPage } from "next";
import ContactDetails from "./contact-details";
import styles from "../styles/header.module.css";

export type HeaderType = {
    className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
    return (
        <div className={`${styles.header} ${className}`}>
            <div className={styles.officeInfo}>
                <ContactDetails
                    rectangle23="/images/contactos/ubicacion.png"
                    nmeroDeTelfono="Ubiacion"
                    prop="234-9876-5400"
                />
                <ContactDetails
                    rectangle23="/images/contactos/telefono.png"
                    nmeroDeTelfono="Número de teléfono"
                    prop="234-9876-5400"
                />
                <ContactDetails
                    rectangle23="/images/contactos/correo.png"
                    nmeroDeTelfono="correo electrónico"
                    prop="prueba@gmail.com"
                />
            </div>
        </div>
    );
};

export default Header;