import { useState } from "react";
import { Modal } from "@components/Elements/Modals";
import BaseLayout from "@layouts/BaseLayout";

export default function Index() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={() => setIsOpen(true)}>Click Open Modal</button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Test Modal">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas nisi, euismod aliquet nisi nisl euismod.
                </div>
            </Modal>
        </div>
    )
}

Index.getLayout = function getLayout(page) {
    return <BaseLayout>{page}</BaseLayout>;
};