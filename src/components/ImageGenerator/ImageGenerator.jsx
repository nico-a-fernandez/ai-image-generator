import React from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/default_image.svg";
export const ImageGenerator = () => {
	return (
		<div className="ai-image-generator">
			<div className="header">
				AI Image <span>Generator</span>
			</div>
			<div className="img-loading">
				<div className="image">
					<img src={default_image} alt="default stock image" />
				</div>
			</div>
		</div>
	);
};
