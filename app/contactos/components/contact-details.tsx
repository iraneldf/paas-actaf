import type { NextPage } from "next";
import styles from "../styles/contact-details.module.css";
import Image from "next/image";

export type ContactDetailsType = {
    className?: string;
    rectangle23?: string;
    nmeroDeTelfono?: string;
    prop?: string;
};

const ContactDetails: NextPage<ContactDetailsType> = ({
                                                          className = "",
                                                          rectangle23,
                                                          nmeroDeTelfono,
                                                          prop,
                                                      }) => {
    return (
        <div className={[styles.contactDetails, className].join(" ")}>
            <div className={styles.contactDetailsChild} />
            <div className={styles.contactDetailsInner}>
                <Image
                    width={100}
                    height={100}
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}${rectangle23}`}
                />
            </div>
            <div className={styles.nmeroDeTelfonoParent}>
                <div className={styles.nmeroDeTelfono}>{nmeroDeTelfono}</div>
                <div className={styles.div}>{prop}</div>
            </div>
        </div>
    );
};

export default ContactDetails;