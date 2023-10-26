import React, { useState, useRef } from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/default_image.svg";
export const ImageGenerator = () => {
	const [image_url, setImage_url] = useState("/");
	let inputRef = useRef(null);

	const imageGenerator = async () => {
		if (inputRef.current.value === "") {
			return 0;
		}
		const response = await fetch(
			"https://api.openai.com/v1/images/generations",
			{
				method: "POST",
				headers: {
					"content-Type": "application/json",
					authorization:
						"Bearer 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",
					"User-Agent": "Chrome",
				},
				body: JSON.stringify({
					prompt: `${inputRef.current.value}`,
					n: 1,
					size: "512x512",
				}),
			}
		);
		let data = await response.json();
		let data_array = data.data;
		setImage_url(data_array[0].url);
	};

	return (
		<div className="ai-image-generator">
			<div className="header">
				AI Image <span>Generator</span>
			</div>
			<div className="img-loading">
				<div className="image">
					<img
						src={image_url === "/" ? default_image : image_url}
						alt="default stock image"
					/>
				</div>
			</div>
			<div className="search-box">
				<input
					type="text"
					ref={inputRef}
					className="search-input"
					placeholder="Describe what you want to see"
				/>
				<div
					className="generate-btn"
					onClick={() => {
						imageGenerator();
					}}
				>
					Generate
				</div>
			</div>
		</div>
	);
};
