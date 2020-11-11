import React from 'react';
import Tour from './Tour';
const Tours = ({ tours }) => {
	return (
		<div>
			{tours.map((item) => {
				return <Tour key={item.id} item={item} />;
			})}
		</div>
	);
};

export default Tours;