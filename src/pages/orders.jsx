import UserLayout from "@layouts/user_layout";
import DashboardView from "@views/dashboard";

export default function Orders() {
    return (
        <DashboardView/>
    )
}

Orders.getLayout = function getLayout(page) {
    return <UserLayout>{page}</UserLayout>;
};