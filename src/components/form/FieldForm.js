import styles from './FieldForm.module.css';
function FieldForm({type, label, placeholder, onChange, value}){
    return (
        <div className={styles.fieldForm}>
            <label> {label} </label>
            <input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}

export default FieldForm