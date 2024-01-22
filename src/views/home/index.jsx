import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "@components/Elements/Modal";
import { add_count } from "@store/actions/demo";

export default function HomeView() {
    const dispatch = useDispatch();
    const demo = useSelector(state => state.demo.count);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <h1>Contador {demo}</h1>
            <button onClick={() => setIsOpen(true)}>Click Open Modal</button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Test Modal">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas nisi, euismod aliquet nisi nisl euismod.
                    <button onClick={() => dispatch(add_count(1))}>Añadir 1</button>
                </div>
            </Modal>
        </div>
    )
}