import Image from 'next/image';
import { useState } from 'react';
import { NavData } from "../../data/sidebar";
import styles from './sidebar.module.css';

// Icons
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseSharp } from 'react-icons/io5';

// Drawer
import { Drawer } from 'antd';

// Image
import Logo from '../../assets/logo.png'


const SideBar = () => {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <RxHamburgerMenu onClick={showDrawer} size={20} />
            <Drawer
                placement="left"
                closable={false}
                onClose={onClose}
                open={open}
                width={250}
            >
                <div className={styles.sideBar}>
                    <div className={styles.titlePart}>
                        <div className={styles.imageName}>
                            <Image
                                src={Logo}
                                alt="icon"
                                height={50}
                                width={50}
                            />
                            <label className={styles.menuLabel}>Menu</label>
                        </div>
                        <div className={styles.closeButton}>
                            <IoCloseSharp onClick={onClose} className={styles.closeIcon} />
                        </div>
                    </div>
                    {NavData.map((item, index) => {
                        return (
                            <div className={styles.sideBarName} key={index}>
                                <div style={{ display: "flex" }}>
                                    <img src={item.icon} alt="icon" height={20} width={20} />
                                    <span className={styles.sideBarLabel}>{item.title}</span>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </Drawer>
        </>
    );
};

export default SideBar;