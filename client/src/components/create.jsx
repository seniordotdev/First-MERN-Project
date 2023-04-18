import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../api";

const Create = () => {
	const [name, setName] = useState("");
	const [author, setAuthor] = useState("");
	const [year, setYear] = useState("");
	const [image, setImage] = useState("");
	const navigate = useNavigate();
	const createBook = async (e) => {
		e.preventDefault();
		const data = await API.post("/books", {
			name,
			author,
			year,
			image,
		});
		console.log(data);
		navigate("/");
	};
	return (
		<div>
			<form onSubmit={createBook} className="flex flex-col w-96 m-auto">
				<label htmlFor="name" className="my-2">
					Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					className="border rounded outline-none"
					onChange={(e) => setName(e.target.value)}
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
				/>
				<label htmlFor="year" className="my-2">
					Image
				</label>
				<input
					type="text"
					name="year"
					id="year"
					className="border rounded outline-none"
					onChange={(e) => setImage(e.target.value)}
				/>
				<input
					type="submit"
					className="bg-blue-600 p-2 rounded my-2 text-white cursor-pointer"
					value="Create"
				/>
			</form>
		</div>
	);
};

export default Create;
