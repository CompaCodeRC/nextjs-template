import { useState } from "react";
import { Modal } from "@components/Elements/Modals";

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