import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "@components/Elements/Modal";
import BaseLayout from "@layouts/BaseLayout";
import { increment } from "@store/features/demo/demoSlice";

export default function Index() {
    const dispatch = useDispatch();
    const demo = useSelector(state => state.demo);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <h1>Contador {demo.value}</h1>
            <button onClick={() => setIsOpen(true)}>Click Open Modal</button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Test Modal">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas nisi, euismod aliquet nisi nisl euismod.
                    <button onClick={() => dispatch(increment())}>Añadir 1</button>
                </div>
            </Modal>
        </div>
    )
}

Index.getLayout = function getLayout(page) {
    return <BaseLayout>{page}</BaseLayout>;
};