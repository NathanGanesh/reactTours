import React, { useState } from 'react';

const Tour = (props) => {
	const { image, info, name, price } = props.item;
	return (
		<div>
			<img src={image} alt={name} />
			<div>
				<p>{name}</p>
				<p>{price}</p>
			</div>
			<div>
				<p>{info}</p>
			</div>
			<div>
				<button>Not Interested</button>
			</div>
		</div>
	);
};

export default Tour;
