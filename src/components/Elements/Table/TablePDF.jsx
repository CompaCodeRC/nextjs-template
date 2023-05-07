import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import ExportJsonExcel from 'js-export-excel';

import styles from './styles.module.scss';

export default function TablePDF({ data, columns }) {
    const body_parse = () => {
        const body = [];
        const head = columns.filter(col => {
            if (!col.accessor) return false;
            return true;
        });

        data.map((row) => {
            const temp = [];
            head.map((column) => {
                if (column.pdf) return temp.push(column.pdf(row));
                if ((row[column.accessor])?.length > 0) return temp.push(row[column.accessor]);
                return temp.push('');
            });
            body.push(temp);
        });
        return body;
    };

    const export_pdf = () => {
        const head = columns.filter(col => {
            if (!col.accessor) return false;
            return true;
        }).map(col => {
            return col.Header;
        });
        
        const body = body_parse();
        const doc = new jsPDF('landscape');
        autoTable(doc, {
            headStyles: {
                fillColor: '#DEA011',
            },
            head: [head],
            body
        });
        doc.save('table.pdf');
    }

    const export_excel = () => {
        const filter = columns.filter(col => {
            if (!col.accessor) return false;
            return true;
        });

        const sheetData = data.map(row => {
            const temp = {};
            filter.map(col => {
                if (col.pdf) return temp[col.accessor] = col.pdf(row);
                if ((row[col.accessor])?.length > 0) return temp[col.accessor] = row[col.accessor];
                return temp[col.accessor] = '';
            });
            return temp;
        });

        //sumar toda la columna y añadir el total en la ultima fila si la columna tiene "total = true"
        let total_a = {};
        filter.map(col => {
            if (!col.total) return null;
            const total = data.reduce((total, row) => {
                const a = col.total(row);
                if (a) return total + a;
                return total + 0;
            }, 0);
            total_a[col.accessor] = total;
        });
        if (Object.keys(total_a).length > 0) sheetData.push(total_a);

        const sheetHeader = filter.map(col => {
            return col.Header;
        });

        const sheetFilter = filter.map(col => {
            return col.accessor;
        });
        
        const option = {
            fileName: 'excel',
            datas: [
                {
                    sheetData,
                    sheetName: 'sheet',
                    sheetFilter,
                    sheetHeader,
                    columnWidths: filter.map(col => {
                        if (col.width) return col.width;
                        return 15;
                    }),
                },
            ],
        };
        const toExcel = new ExportJsonExcel(option);
        toExcel.saveExcel();
    };

    return (
        <div className={styles.download}>
            <div onClick={export_pdf}>Descargar PDF</div>
            <div onClick={export_excel}>Descargar Excel</div>
        </div>
    )
};