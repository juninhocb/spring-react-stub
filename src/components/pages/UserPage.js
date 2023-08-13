import styles from "../pages/CommonPage.module.css";
import NavBar from "../commons/NavBar";
import Footer from "../commons/Footer";
import Table from "../generic/Table";
import axios from "axios";
import React, { useState, useEffect } from 'react';
function UserPage(){

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






    return (
        <div className="App">
            <NavBar/>
            <section className={styles.common}>
                <p> Table of users </p>
                <Table columns={columns} data={data} />
            </section>
            <Footer/>
        </div>
    );
}

export default UserPage
