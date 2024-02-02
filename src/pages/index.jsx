import BaseLayout from "@layouts/base_layout";
import HomeView from "@views/home";

export default function Index() {
    return (
        <HomeView/>
    )
}

Index.getLayout = function getLayout(page) {
    return <BaseLayout>{page}</BaseLayout>;
};