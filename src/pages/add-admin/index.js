import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from "react";
import styles from '../../styles/add-admin.module.css';

// Phone-Number Filed
import Input from 'react-phone-number-input/input';

// Icons
import { IoChevronBackSharp } from 'react-icons/io5';

// side-bar
import SideBar from "@/components/sidebar";


const AddAdmin = () => {

    const router = useRouter();

    const [value, setValue] = useState();

    const slug = 1

    return (
        <>
            <Head>
                <title>Add-Admin</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <div className={styles.adminPage}>
                <div className={styles.upperPart}>
                    <IoChevronBackSharp size={20} onClick={() => router.push('/')} />
                    <label className={styles.addLabel}>Add</label>
                    <SideBar />
                </div>
                <div className="add-body-part">
                    <div className={styles.adminPhoneNumber}>
                        <label className={styles.adminPhoneLabel}>
                            Phone Number
                        </label>
                        <Input
                            international
                            country="MY"
                            withCountryCallingCode
                            value={value}
                            className={styles.adminPhoneField}
                            onChange={setValue} />
                    </div>
                    <div className={styles.adminName}>
                        <label className={styles.adminNameLabel}>
                            Result
                        </label>
                        <input
                            type="text"
                            name="name"
                            className={styles.adminNameField}
                        />
                    </div>
                    <div className={styles.adminSubmitButton}>
                        <Link href={`/admin/${slug}`}>
                            <button className={styles.button}>
                                Submit
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddAdmin;