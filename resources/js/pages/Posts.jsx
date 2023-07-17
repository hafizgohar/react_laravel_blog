import React, { useEffect, useState } from "react";

import axios from "axios";

import PostCard from "../components/PostCard";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");

    const fetchPosts = async () => {
        try {
            const response = axios.get("http://localhost:8000/api/getPost");
            console.log(response.data);
            setPosts((await response).data.posts);
        } catch ({ response }) {
            setError((await response).data.error);
        }
    };
    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <>
            <section className="w-full p-5  mb-5">
                <div class="grid grid-cols-3 gap-4">
                    {posts &&
                        posts.map((data) => {
                            return <PostCard {...data} />;
                        })}
                </div>
            </section>
        </>
    );
};
export default Posts;
