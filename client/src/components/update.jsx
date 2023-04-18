import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../api";

const Update = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [author, setAuthor] = useState("");
	const [year, setYear] = useState("");
	const upadateBook = async (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const author = e.target.author.value;
		const year = e.target.year.value;
		await API.put(`/books/${id}`, {
			name,
			author,
			year,
		});
		navigate("/");
	};
	const getBook = async () => {
		const { data } = await axios.get(`http://localhost:5000/api/books/${id}`);
		setName(data.getBook.name);
		setAuthor(data.getBook.author);
		setYear(data.getBook.year);
	};
	useEffect(() => {
		getBook();
	});
	return (
		<div>
			<form onSubmit={upadateBook} className="flex flex-col w-96 m-auto">
				<label htmlFor="name" className="my-2">
					Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					className="border rounded outline-none"
					onChange={(e) => setName(e.target.value)}
					defaultValue={name}
				/>
				<label htmlFor="author" className="my-2">
					Author
				</label>
				<input
					type="text"
					name="author"
					id="author"
					className="border rounded outline-none"
					onChange={(e) => setAuthor(e.target.value)}
					defaultValue={author}
				/>
				<label htmlFor="year" className="my-2">
					Year
				</label>
				<input
					type="number"
					name="year"
					id="year"
					className="border rounded outline-none"
					onChange={(e) => setYear(e.target.value)}
					defaultValue={year}
				/>
				<input
					type="submit"
					className="bg-blue-600 p-2 rounded my-2 text-white cursor-pointer"
					value="Update"
				/>
			</form>
		</div>
	);
};

export default Update;
