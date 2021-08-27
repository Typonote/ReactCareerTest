import React, { useState } from 'react';

const MyProgressBar = ({Percentage}) => {

    const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${Percentage}%`
		}
		
		setStyle(newStyle);
	}, 500);

    return(
    <div className="component-progress-container">
        <div className='progress-bar' style={style}>
            <h4>{Percentage} %</h4>
        </div>
    </div>
    );

};

export default MyProgressBar;

// YOUTUBE => React Progress Bar - with hooks - Day 15