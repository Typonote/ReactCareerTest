import React from 'react';
import ResultLevelCard from './ResultLevelCard';
import ResultMajorCard from './ResultMajorCard';

// 현재시간 컴포넌트
const ResultCard = () => {
    
    
    return (
        <>
        <div className='resultcard-title'>
            <h2>가치관과 관련이 높은 직업</h2>
        </div>
            <ResultLevelCard />
            <ResultMajorCard />
        </>
    );
};

export default ResultCard;