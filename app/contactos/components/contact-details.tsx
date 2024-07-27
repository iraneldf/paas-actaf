import type { NextPage } from "next";
import styles from "../styles/contact-details.module.css";
import Image from "next/image";

export type ContactDetailsType = {
    className?: string;
    figura?: string;
    tipo?: string;
    numero?: string;
};

const ContactDetails: NextPage<ContactDetailsType> = ({
    className = "",
    figura,
    tipo,
    numero,
}) => {
    return (
        <div className={[styles.contactDetails, className].join(" ")}>

            <div className={styles.imagenContenedor}>
                <Image
                    width={100}
                    height={100}
                    className={styles.imagen}
                    loading="lazy"
                    alt=""
                    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}${figura}`}
                />
            </div>

            <div className={styles.infoContender}>
                <div className={styles.tipo}>{tipo}</div>
                <div className={styles.numero}>{numero}</div>
            </div>

        </div>
    );
};

export default ContactDetails;