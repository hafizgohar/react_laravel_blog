import { useState } from "react";
import moment from "moment/moment";
import axios from "axios";

const UpdateForm = ({
    post_id,
    title,
    author,
    content,
    description,
    date_time,
}) => {
    const [formData, setFormData] = useState({
        id: post_id,
        title: title,
        description: description,
        content: content,
        author: author,
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = axios.patch(
                `http://localhost:8000/api/editPost/${formData.id}`,
                formData
            );
            setMessage((await response).data.message);
        } catch ({ response }) {
            setError((await response).data.error);
        }
    };

    return (
        <>
            <div className="w-full">
                {message ? (
                    <div
                        class="bg-blue-100 mb-3 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
                        role="alert"
                    >
                        <p class="font-bold">Success</p>
                        <p class="text-sm">{message}</p>
                    </div>
                ) : null}
                {error ? (
                    <div
                        class="bg-red-100 mb-3 border-t border-b border-red-500 text-red-700 px-4 py-3"
                        role="alert"
                    >
                        <p class="font-bold">Failed</p>
                        <p class="text-sm">{error}</p>
                    </div>
                ) : null}
                <form onSubmit={handleSubmit}>
                    <div className="relative mb-5">
                        <input
                            type="text"
                            id="floating_outlined"
                            name="title"
                            value={formData.title}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
                        >
                            Title
                        </label>
                    </div>
                    <div className="relative mb-5">
                        <input
                            type="text"
                            id="floating_outlined"
                            name="description"
                            value={formData.description}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
                        >
                            Description
                        </label>
                    </div>
                    <div className="relative mb-5">
                        <textarea
                            type="text"
                            id="floating_outlined"
                            name="content"
                            value={formData.content}
                            className="block h-[200px]  px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={handleChange}
                        ></textarea>
                        <label
                            htmlFor="floating_outlined"
                            className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[10%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
                        >
                            Content
                        </label>
                    </div>
                    <div className="relative mb-5">
                        <input
                            type="text"
                            id="floating_outlined"
                            name="author"
                            value={formData.author}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="floating_outlined"
                            className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
                        >
                            Author
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="ml-auto bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
                    >
                        Update
                    </button>
                </form>
            </div>
        </>
    );
};
export default UpdateForm;
