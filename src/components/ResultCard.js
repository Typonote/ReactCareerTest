import React from 'react';
import ResultLevelCard from './ResultLevelCard';
import ResultMajorCard from './ResultMajorCard';

// 현재시간 컴포넌트
const ResultCard = () => {
    
    
    return (
        <>
            <h3>가치관과 관련이 높은 직업</h3>
            <ResultLevelCard />
            <ResultMajorCard />
        </>
    );
};

export default ResultCard;