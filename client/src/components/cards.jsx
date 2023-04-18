import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../api";
const Cards = () => {
	const [books, setBooks] = useState([]);
	const getBooks = async () => {
		const res = await API.get("/books");
		setBooks(res.data.allBooks);
	};
	const deleteBook = async (id) => {
		await API.delete(`/books/${id}`);
		getBooks();
	};
	useEffect(() => {
		getBooks();
	}, []);
	return (
		<div className="flex justify-around flex-wrap gap-3 align-middle ">
			{books
				.map((book) => (
					<div key={book._id}>
						<div className="w-96 rounded overflow-hidden shadow-lg p-3">
							<img
								className="w-full"
								src={book.image}
								style={{ width: "100%", height: "250px" }}
								alt="Sunset in the mountains"
							/>
							<div className="px-6 py-4">
								<div className="font-bold text-xl mb-2">{book.name}</div>
								<p className="text-gray-700 text-base">
									<svg
										style={{
											width: "25px",
											display: "inline-block",
											marginRight: "5px",
										}}
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
										></path>
									</svg>
									Author: {book.author}
								</p>
								<p>
									<svg
										style={{
											width: "25px",
											display: "inline-block",
											marginRight: "5px",
										}}
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
										></path>
									</svg>
									Year: {book.year}
								</p>
							</div>

							<button
								className="bg-red-600 text-white p-2 rounded m-1"
								onClick={() => deleteBook(book._id)}
							>
								<svg
									style={{ width: "25px", display: "inline-block" }}
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
									></path>
								</svg>
								DELETE
							</button>
							<Link to={`/update/${book._id}`}>
								<button className="bg-blue-600 text-white p-2 rounded">
									<svg
										style={{ width: "25px", display: "inline-block" }}
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
										></path>
									</svg>
									UPDATE
								</button>
							</Link>
						</div>
					</div>
				))
				.reverse()}
		</div>
	);
};

export default Cards;
