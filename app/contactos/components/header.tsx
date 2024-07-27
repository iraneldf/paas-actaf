import type { NextPage } from "next";
import ContactDetails from "./contact-details";
import styles from "../styles/header.module.css";

export type HeaderType = {
    className?: string;
};

const ContactHeader: NextPage<HeaderType> = ({ className = "" }) => {
    return (
        <div
            style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/contactos/fondo.png)` }}

            className={`${styles.header} ${className}`}>

            <div className={styles.officeInfo}>
                
                <ContactDetails
                    figura="/images/contactos/ubicacion.png"
                    tipo="Ubiacion"
                    numero="234-9876-5400"
                />
                <ContactDetails
                    figura="/images/contactos/telefono.png"
                    tipo="Número de teléfono"
                    numero="234-9876-5400"
                />
                <ContactDetails
                    figura="/images/contactos/correo.png"
                    tipo="correo electrónico"
                    numero="prueba@gmail.com"
                />
            </div>
        </div>
    );
};

export default ContactHeader;