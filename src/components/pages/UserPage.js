import styles from "../pages/CommonPage.module.css";
import NavBar from "../commons/NavBar";
import Footer from "../commons/Footer";
import Table from "../generic/Table";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import SizedBox from "../styles/SizedBox";
import ModalOkCancel from "../generic/ModalOkCancel";
function UserPage(){

    const [showModal, setShowModal] = useState(false);
    const [userToDeleteId, setUserToDeleteId] = useState(null);

    const [data, setData] = useState([]);
    const columns = [
        { Header: 'Id', accessor: 'id'},
        { Header: 'Name', accessor: 'name' },
        { Header: 'Age', accessor: 'age' },
        { Header: 'Password', accessor: 'password'}
    ];

    useEffect(() =>{
        axios.get("http://localhost:8080/api/v1/user")
            .then((response) =>{
                const responseData = response.data;
                /*window.alert("Ok " + JSON.stringify(responseData));*/
                setData(responseData);
            })
            .catch((error) => {
                window.alert("Error on fetching data!" + error);
            });
    });

    function handleEdit(e){
        e.preventDefault();
        window.alert("will edit!!!");
    }

    function handleRemove(e, userId){
        e.preventDefault();
        setUserToDeleteId(userId);
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
        setUserToDeleteId(null);
    }

    function handleOk(){
        console.log(`http://localhost:8080/api/v1/user/${userToDeleteId}`);
        if (userToDeleteId !== null) {
            axios.delete(`http://localhost:8080/api/v1/user/${userToDeleteId}`)
                .then((response) => {
                    window.alert("Deleted user!");
                })
                .catch((error) => {
                    window.alert("Error on deleting user!" + error);
                })
                .finally(() => {
                    setShowModal(false);
                    setUserToDeleteId(null);
                });
        }
    }

    return (
        <div className="App">
            <NavBar/>
            <section className={styles.common}>
                <SizedBox height="50px"/>
                <Table columns={columns}
                       data={data}
                       handleEdit={handleEdit}
                       handleRemove={handleRemove}
                />
            </section>
            <Footer/>
            {showModal && <ModalOkCancel
                tittle="Delete User"
                content="Are you sure that want delete this user?"
                handleOk={handleOk}
                onClose={handleCloseModal} />}
        </div>
    );
}

export default UserPage
