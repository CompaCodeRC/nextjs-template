import UserLayout from "@layouts/user_layout";
import DashboardView from "@views/dashboard";

export default function Dashboard() {
    return (
        <DashboardView/>
    )
}

Dashboard.getLayout = function getLayout(page) {
    return <UserLayout>{page}</UserLayout>;
};