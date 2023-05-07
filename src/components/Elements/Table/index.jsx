import { useState, useEffect } from 'react';
import TablePDF from './TablePDF';

import styles from './styles.module.scss';

export default function Table({ data, columns, download, total }) {
    const [dataSort, setDataSort] = useState([]);

    const sort = (key) => {
        if (!dataSort[0]) return null;
        const check_order = dataSort[0][key] > dataSort[1][key] ? true : false;
        const sorted = [...data].sort((a, b) => {
            if (check_order) {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            } else {
                if (a[key] > b[key]) return -1;
                if (a[key] < b[key]) return 1;
                return 0;
            }
        })
        setDataSort(sorted)
    };

    useEffect(() => {
        setDataSort(data)
    }, [data])

    if (!dataSort[0]) return (
        <div className={styles.container}>
                <div className={styles.no_data}>
                    <div>No hay datos</div>
                </div>
        </div>
    );
    return (
        <div className={styles.container}>
            {download && <TablePDF data={dataSort} columns={columns}/>}
            <div className={styles.sub_container}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            {columns.map((column, index) => {
                                return (
                                    <th key={index}>
                                        <div className={styles.th}>
                                            <div>{column.Header}</div>
                                            {column.Header.length > 0 && <div className={styles.sort} onClick={() => sort(column.accessor)}>
                                                <span>↑</span>
                                                <span>↓</span>
                                            </div>}
                                        </div>
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {dataSort.map((row, index) => {
                            return (
                                <tr key={index}>
                                    {columns.map((column, index) => <td key={index}>{column.Cell ? column.Cell(row) : row[column.accessor]}</td>)}
                                </tr>
                            )
                        })}
                        {total && <tr className={styles.total}>
                            {columns.map((column, index) => {
                                if (!column.total) return <td></td>;
                                return (
                                    <td key={index}>
                                        {data.reduce((acc, curr) => acc + Number(column.total(curr)), 0)}
                                    </td>
                                )
                            })}
                        </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

/* {
    Header: 'Titulo',
    accessor: 'object',
    Cell: (val) => val,
    pdf: (val) => val
} */