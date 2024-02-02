import styles from "./styles.module.scss";
import Table from "@components/Elements/Table";

export default function UsersView() {
    const data = [
        {
            id: 1,
            name: "John Doe",
            status: "Employed",
            createdAt: "2021/01/01",
        },
        {
            id: 2,
            name: "Maria Perez",
            status: "Employed",
            createdAt: "2022/01/01",
        }
    ]
    
    const columns = [
        {
            Header: "#",
            accessor: "id",
        },
        {
            Header: "Nombres",
            accessor: "name",
        },
        {
            Header: "Estado",
            accessor: "status",
        },
        {
            Header: "Fecha de Registro",
            accessor: "createdAt",
        },
    ];

    return (
        <div className={styles.users}>
            <Table columns={columns} data={data}/>
        </div>
    )
}