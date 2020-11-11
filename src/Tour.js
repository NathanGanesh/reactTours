import React, { useState } from 'react';

const Tour = (props) => {
	const { image, info, name, price, id } = props.item;
	const [ readMore, setReadMore ] = useState(false);
	// console.log(props);
	return (
		<div className="single-tour">
			<img src={image} alt={name} />
			<div className="tour-tray">
				<div className="tour-description">
					<p className="tour-name">{name}</p>
					<p className="tour-price">$ {price}</p>
				</div>

				<p>
					{readMore ? info : `${info.substring(0, 200)}...`}
					<button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : '  read more'}</button>
				</p>

				<button className="not-interested" onClick={() => props.filterItems(id)}>
					Not interested
				</button>
			</div>
		</div>
	);
};

export default Tour;
