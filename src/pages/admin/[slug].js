import Head from "next/head";
import { useState } from 'react';
import { useRouter } from 'next/router'
import { AdminData } from "@/data/admindata";
import styles from '../../styles/admin.module.css';
import SideBar from "@/components/sidebar";

// Modal
import { Modal } from 'antd';

// Icons
import { IoChevronBackSharp } from 'react-icons/io5';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';

const Admin = ({ proData }) => {

    console.log(proData);

    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Head>
                <title>Admin</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <div className={styles.adminDataPage}>
                <div className={styles.upperPart}>
                    <IoChevronBackSharp size={20} onClick={() => router.push('/add-admin')} />
                    <label className={styles.addLabel}>Admin</label>
                    <SideBar />
                </div>
                <div className={styles.addButton}>
                    <button className={styles.button} onClick={() => router.push('/add-admin')}>
                        Add
                    </button>
                </div>
                <div className="admin-data">
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <th className={styles.th}>Name</th>
                                <th className={styles.th}>Phone</th>
                                <th className={styles.th}></th>
                            </tr>
                            {AdminData.map((val, key) => {
                                return (
                                    <tr key={key} className={styles.tr}>
                                        <td>{val.title}</td>
                                        <td>{val.phone}</td>
                                        <td>
                                            <div className={styles.iconPart}>
                                                <RiDeleteBin5Line className={styles.deleteIconAdmin} onClick={showModal} />
                                                <FiEdit size={14} className={styles.editIconAdmin} onClick={() => router.push('/add-admin')} />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <Modal open={isModalOpen} closable={false} centered footer={null}>
                    <div className={styles.modalContent}>
                        <span className={styles.deleteHead}>
                            Delete
                        </span>
                        <span className={styles.deleteText}>
                            Are you sure to delete?
                        </span>
                        <div className={styles.buttonPart}>
                            <button className={styles.yesButton} onClick={handleCancel}>Yes</button>
                            <button className={styles.noButton} onClick={handleCancel}>No</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export async function getServerSideProps(context){
    // const { id } = context?.query;
    // let id;
    // if (query?.data) {
    //     try {
    //         const parsedData = JSON.parse(query.data);
    //         id = parsedData;
    //     } catch {
    //         console.log("Error");
    //     }
    // }
    const res = await fetch(`https://dummyjson.com/products/${context?.query.slug}`)   
    const proData = await res.json();
    console.log(proData);

    // // const resPost = await fetch(`${process.env.NEXT_APP_API_URL}/view-post-by-id?name=${id?.name}`)
    // // const postData1 = await resPost.json();

    // const resType = await fetch(`${process.env.NEXT_APP_API_URL}/get-all-type`)
    // const type = await resType.json();

    return {
        props: {
            proData
            // // postData1: postData1 ? postData1 : "No Data Available",
            // type: type ? type : "No Data Available"
        }
    }
}

export default Admin;