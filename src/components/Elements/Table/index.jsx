import { useState, useEffect, useMemo } from 'react';
import TablePDF from './TablePDF';

import styles from './styles.module.scss';

export default function Table({ data = [], columns = [], download, total, isLoading }) {
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(true);

    const sortedData = useMemo(() => {
        if (!sortKey) return data;
        return [...data].sort((a, b) => {
            if (sortOrder) {
                if (a[sortKey] < b[sortKey]) return -1;
                if (a[sortKey] > b[sortKey]) return 1;
            } else {
                if (a[sortKey] > b[sortKey]) return -1;
                if (a[sortKey] < b[sortKey]) return 1;
            }
            return 0;
        });
    }, [data, sortKey, sortOrder]);

    const sort = (key) => {
        if (key === sortKey) {
            setSortOrder(!sortOrder); // Cambia el orden si se hace clic en el mismo encabezado
        } else {
            setSortKey(key);
            setSortOrder(true); // Orden ascendente por defecto
        }
    };

    if (!sortedData.length) return (
        <div className={styles.container}>
                <div className={styles.no_data}>
                    <div>No hay datos</div>
                </div>
        </div>
    );
    return (
        <div className={styles.container}>
            {download && <TablePDF data={sortedData} columns={columns}/>}
            <div className={styles.sub_container}>
                {isLoading && <Skeleton width={'100%'} height={50}/>}
                {!isLoading &&
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
                            {sortedData.map((row, index) => {
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
                }
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