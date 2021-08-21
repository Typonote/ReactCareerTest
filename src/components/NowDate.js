import React from 'react';

// 현재시간 컴포넌트
const NowDate = () => {
    
    var today = new Date();
    var nowYear = today.getFullYear();
    var nowMonth = today.getMonth();
    var nowDate = today.getDate();

    return (
        <p>검사일: {nowYear}년 {nowMonth+1}월 {nowDate}일</p>
    );
};

export default NowDate;

// YOUTUBE: ReactJS Current Date and Time jsx Component