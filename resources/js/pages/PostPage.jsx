import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BsPencilSquare } from "react-icons/bs";
import EditModal from "../components/EditModal";

const PostPage = () => {
    const [post, setPost] = useState();
    const [error, setError] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const { id } = useParams();

    const fetchPostData = async () => {
        try {
            const response = axios.get(
                `http://localhost:8000/api/retrievePost/${id}`
            );
            console.log((await response).data);
            setPost((await response).data);
        } catch ({ response }) {
            setError((await response).data.error);
        }
    };

    useEffect(() => {
        fetchPostData();
    }, []);
    return (
        <>
            <section className="w-full p-5">
                <div className="grid grid-cols-3">
                    <div className="bg-white shadow-md col-span-2 p-3">
                        {post && (
                            <div className="w-100 p-3">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="mb-5 w-full flex justify-end items-center"
                                >
                                    <BsPencilSquare
                                        size={30}
                                        className="  text-gray-400"
                                    />
                                </button>
                                <div className="flex items-baseline justify-between mb-5">
                                    <h1 className="text-6xl">{post.title}</h1>
                                    <h4 className=" text-gray-400">
                                        {post.date_time}
                                    </h4>
                                </div>
                                <h3 className="text-xl text-gray-500 mb-4">
                                    {post.description}
                                </h3>
                                <div className="border-b border-gray-300 mb-4"></div>
                                <p className="text-lg mb-3">{post.content}</p>
                                <h3 className=" text-xl text-right italic text-gray-400">
                                    Author: {post.author}
                                </h3>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <EditModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                post={post ? post : null}
                post_id={id}
            />
        </>
    );
};
export default PostPage;
