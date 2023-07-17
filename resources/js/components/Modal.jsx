import { createPortal, Fragment } from "react-dom";
import { Dialog, Transition } from "@headlessui/react";
import PostForm from "./PostForm";

const PostModal = ({ isOpen, setIsOpen }) => {
    return createPortal(
        <Transition
            show={isOpen}
            enter="transition duration-300 ease-in-out"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition duration-300 ease-in"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            as={Fragment}
        >
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50 "
            >
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center  ">
                    <Dialog.Panel className="mx-auto w-1/2 max-w-[70%] rounded-lg bg-white p-6">
                        <Dialog.Title className="text-center text-3xl mb-3">
                            Add a New Post
                        </Dialog.Title>
                        <PostForm />
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>,
        document.getElementById("modal-root") // Use the portal container element as the second argument
    );
};

export default PostModal;
