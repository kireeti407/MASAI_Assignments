import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Films() {
	const [films, setFilms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("https://swapi.info/api/films")
			.then((res) => {
				setFilms(res.data || []);
				console.log(res);
				setLoading(false);
			})
			.catch((err) => {
				setError("Failed to fetch films");
				setLoading(false);
			});
         
	}, []);

		if (loading) return <div className="text-center py-8 text-lg">Loading films...</div>;
		if (error) return <div className="text-center py-8 text-red-600">{error}</div>;

		return (
			<div className="card-list">
				{films.map((film) => (
					<div
						key={film.id || film.url}
						className="card"
						onClick={() => navigate(`/films/${film.id || film.url.split("/").filter(Boolean).pop()}`)}
					>
						<h2>{film.title}</h2>
						<p><strong>Director:</strong> {film.director}</p>
						<p><strong>Release Date:</strong> {film.release_date}</p>
					</div>
				))}
			</div>
		);
}
