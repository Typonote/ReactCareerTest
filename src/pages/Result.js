import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { init } from '../redux/action';
import { Helmet } from 'react-helmet';
import NowDate from '../components/NowDate';
import ResultCard from '../components/ResultCard';

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
                    <p>직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과 신념입니다. 따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의 역할을 한다고 볼 수 있습니다. 직업가치관검사는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려줍니다. 또한 본인이 가장 중요하게 생각하는 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</p>
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

