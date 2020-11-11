import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, filterItems }) => {
	return (
		<div className="tours">
			{tours.map((item) => {
				return <Tour key={item.id} item={item} filterItems={filterItems} />;
			})}
		</div>
	);
};

export default Tours;
