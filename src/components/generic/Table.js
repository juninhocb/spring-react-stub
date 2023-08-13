import Button from "./Button";
import styles from "./Table.module.css";
import SizedBox from "../styles/SizedBox";
function Table({columns, data, handleEdit, handleRemove}){

    return (
        <table className={styles.table}>
            <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.accessor}>{column.Header}</th>
                ))}
                <th style={{ width: "150px" }}>Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    {columns.map((column) => (
                        <td key={column.accessor}>{row[column.accessor]}</td>
                    ))}
                    <td>
                        <div className={styles.rowElements}>
                            <Button type="submit"
                                    text="Remove"
                                    rowButton={true}
                                    widthRowButton={"75px"}
                                    onClick={(e) => handleRemove(e, row.id)}
                            />
                            <SizedBox width="7px"/>
                            <Button type="submit"
                                    text="Edit"
                                    rowButton={true}
                                    widthRowButton={"75px"}
                                    onClick={(e) => handleEdit(e, row.id)}
                            />
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;