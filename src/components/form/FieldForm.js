import styles from './FieldForm.module.css';
function FieldForm({label, placeholder, onChange, value}){
    return (
        <div className={styles.fieldForm}>
            <label> {label} </label>
            <input value={value} onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}

export default FieldForm