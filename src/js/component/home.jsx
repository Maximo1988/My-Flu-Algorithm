import React from "react";

//include images into your bundle
import Image from "../../img/foto.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5 text-info"><b>My Flu Algorithm</b></h1>
			<p></p>
			<p>
				<img src={Image} />
			</p>
			<Link to={`/flu`} className="btn btn-warning">Start Asking!</Link>
			<p></p>
			<p>
				<b>Made by{" "}
				<a href="https://github.com/Maximo1988">Máximo Bandoni</a></b>
			</p>
		</div>
	);
};

export default Home;
