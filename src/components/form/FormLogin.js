import FieldForm from "./FieldForm";
import Button from "../generic/Button";
import styles from "./Form.module.css";
import Image from "../generic/Image";
import logo from "../../assets/images/logo.svg";
import SizedBox from "../styles/SizedBox";
import { useState } from "react";
import axios from 'axios';
import LinkButton from "../generic/LinkButton";
import { useNavigate } from "react-router-dom";


function FormLogin(){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function handleLogin(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/api/v1/user/login', {
            name: name,
            password: password
        })
            .then(response => {
                navigate("/home");
            })
            .catch(error => {
                window.alert("Login failed. Please try again.");
            });
    }

    return(
        <div>
            <form className={styles.form}>
                <Image image={logo} alt="logo" />
                <FieldForm
                    type="text"
                    label="Name"
                    placeholder="Enter with your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <SizedBox height=".3em"/>
                <FieldForm
                    type="password"
                    label="Password"
                    placeholder="Enter with your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <SizedBox height=".7em"/>
                <Button type="submit" text="Enter" onClick={handleLogin}/>
                <SizedBox height=".7em" />
                <LinkButton path="/register" text="Register" />
            </form>
        </div>
    )
}

export default FormLogin