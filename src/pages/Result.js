import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { init } from '../redux/action';
import { Helmet } from 'react-helmet';
import NowDate from '../components/NowDate';
import ResultCard from '../components/ResultCard';
import ResultGraph from '../components/ResultGraph';

const Result = () => {
    const dispatch = useDispatch();

    // redux에 저장된 이름값 읽어오기
    const name = useSelector((state) => state).name;
    const gender = useSelector((state) => state).gender;

    // 다시 검사하기 버튼 누르면 초기화 
    const handleClick = () => {
        dispatch(init());
    };

    return (
        <>
            <Helmet><title>직업가치관검사 - 결과표</title></Helmet>
            <div className = "result-container">
                <h1>{name}님의 직업가치관 검사 결과표</h1>
                <div className="result-userinfo-container">
                    <p>성별: {gender === 'man'? '남성':'여성'}</p>
                    <NowDate />
                </div>
                <div className="result-display-container">
                    <ResultGraph />
                    <ResultCard />
                </div>
            </div>
            <div className="restart-button-container">
                    <Link to="/" className="restart">
                        <button onClick={handleClick} className="restart">
                            다시 검사하기
                            </button>
                    </Link>
            </div>
        </>
    );
};

export default Result;

