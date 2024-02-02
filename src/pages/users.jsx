import UserLayout from "@layouts/user_layout";
import UsersView from "@views/users";

export default function Users() {
    return (
        <UsersView/>
    )
}

Users.getLayout = function getLayout(page) {
    return <UserLayout>{page}</UserLayout>;
};