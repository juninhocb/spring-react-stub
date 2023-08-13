import Button from "./Button";
import styles from "./Table.module.css";
import axios from 'axios';
function Table({columns, data}){


    return (
        <table className={styles.table}>
            <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.accessor}>{column.Header}</th>
                ))}
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    {columns.map((column) => (
                        <td key={column.accessor}>{row[column.accessor]}</td>
                    ))}
                    <td><Button type="submit" text="Remove"/></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;