import React, { useState } from "react";

import { useLocation, Link, useNavigate } from "react-router-dom";
import PostModal from "./Modal";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === "/";
    return (
        <>
            <nav
                className={`${
                    isHomePage
                        ? "bg-transparent"
                        : "bg-white border-b border-gray-300"
                } bg-transparent sticky w-full z-20 top-0 left-0 `}
            >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
                    <Link to="/" className="flex items-center">
                        <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
                            My Blog
                        </span>
                    </Link>
                    <div className="flex md:order-2 gap-3">
                        <button
                            onClick={() => navigate("/posts")}
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800     font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            View Posts
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800      font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add a New Post
                        </button>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            <PostModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};
export default Header;
