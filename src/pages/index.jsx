import BaseLayout from "@layouts/BaseLayout";
import HomeView from "@views/home";

export default function Index() {
    return (
        <HomeView/>
    )
}

Index.getLayout = function getLayout(page) {
    return <BaseLayout>{page}</BaseLayout>;
};