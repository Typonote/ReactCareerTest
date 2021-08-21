import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { init } from '../redux/action';
import { Helmet } from 'react-helmet';
import NowDate from '../components/NowDate';

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
            <Helmet><title>직업가치관검사 - 검사표</title></Helmet>
            <div className = "result-container">
                <h1>{name}님의 직업가치관 검사 검사표</h1>
                <div className="result-userinfo-container">
                    <p>성별: {gender}</p>
                    <NowDate />
                </div>
                <div className="result-display-container">
                    <p>코로나19 신규 확진자가 하루 새 1880명 늘었지만 이틀 만에 2000명 아래로 떨어졌다. 중앙방역대책본부는 21일 0시 기준 신규 확진자가 국내 발생 1814명, 해외 유입 66명으로 모두 1880명이라고 발표했다. 지역별 국내 발생 확진자는 경기 585명, 서울 518명, 경북 109명 등이다. 1880명의 확진자 수는 46일 연속 네 자릿수를 기록한 것이다.</p>
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

