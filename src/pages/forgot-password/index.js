import Image from "next/image";
import Head from "next/head";
import { useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/forgot.module.css';


// Phone-Number Filed
import Input from 'react-phone-number-input/input';

// image
import Logo from '../../assets/logo.png'


const ForgotPassword = () => {

    const router = useRouter();

    const [value, setValue] = useState()

    return (
        <>
            <Head>
                <title>Forgot-Password</title>
                <meta name="description" content="Generated by create next app" />
            </Head>


            <div className={styles.bgImage}>
                <div className={styles.imagePart}>
                    <Image
                        src={Logo}
                        alt="icon"
                        height={120}
                        width={150}
                    />
                    <label className={styles.labelName}>Forgot Password</label>
                </div>
                <div className={styles.formPart}>
                    <div className={styles.phoneNumber}>
                        <label className={styles.phoneLabel}>
                            Phone Number
                        </label>
                        <div className={styles.phonePart}>
                            <Input
                                international
                                country="MY"
                                withCountryCallingCode
                                value={value}
                                className={styles.phoneField}
                                onChange={setValue} />

                            <button className={styles.otpButton}>
                                Get OTP
                            </button>
                        </div>

                    </div>
                    <div className={styles.otp}>
                        <label className={styles.otpLabel}>
                            Enter OTP
                        </label>
                        <input
                            type="number"
                            name="OTP"
                            className={styles.otpField}
                        />
                    </div>
                    <div className={styles.password}>
                        <label className={styles.passwordLabel}>
                            Your Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className={styles.passwordField}
                        />
                    </div>
                    <div className={styles.saveButton}>
                        <button className={styles.button} onClick={() => router.push('/')}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ForgotPassword;