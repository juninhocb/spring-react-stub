import Button from "./Button";
import styles from "./Modal.module.css";
import SizedBox from "../styles/SizedBox";
import Image from "./Image";
import logo from "../../assets/images/logo.svg";

function ModalOkCancel({tittle, content, handleOk, onClose}){
    return (
        <div className={styles.modal} id="modal">
            <div className={styles.content}>
                <Image image={logo} alt="logo" height="75px"/>
                <h2>{tittle}</h2>
                <p> {content}</p>
                <div className={styles.divBtn}>
                    <Button text="Ok"
                            rowButton={true}
                            widthRowButton={"75px"}
                            onClick={handleOk}
                    />
                    <SizedBox width="5px"/>
                    <Button text="Cancel"
                            rowButton={true}
                            widthRowButton={"75px"}
                            onClick={onClose}
                    />
                </div>
            </div>

        </div>
    );
}

export default ModalOkCancel