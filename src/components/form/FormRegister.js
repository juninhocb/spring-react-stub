import styles from "./Form.module.css";
import Image from "../generic/Image";
import logo from "../../assets/images/logo.svg";
import FieldForm from "./FieldForm";
import SizedBox from "../styles/SizedBox";
import Button from "../generic/Button";
import { useState } from "react";
import LinkButton from "../generic/LinkButton";
import axios from "axios";

function FormRegister(){

    const[name, setName] = useState();
    const[password, setPassword] = useState();
    const[passwordConfirm, setPasswordConfirm] = useState();

    function handleRegister(){
        if (passwordConfirm === password){
            axios.post("http://localhost:8080/api/v1/user", {
                name: name,
                password: password
            }).then(response => {
                window.alert("User successfully registered.");
            }).catch(() =>{
                window.alert("The user was not registered.");
            });
        }else {
            window.alert("Password not match");
        }
    }
    return (
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
                <SizedBox height=".3em"/>
                <FieldForm
                    type="password"
                    label="Repeat Password"
                    placeholder="Enter password again"
                    value={passwordConfirm}
                    onChange={(event) => setPasswordConfirm(event.target.value)}
                />
                <SizedBox height=".7em" />
                <Button onClick={handleRegister} text="Register" />
                <SizedBox height=".7em" />
                <LinkButton path="/" text="Voltar" />
            </form>
        </div>
    );
}

export default FormRegister