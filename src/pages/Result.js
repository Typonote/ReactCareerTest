import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetResult, init } from '../redux/action';
import { Helmet } from 'react-helmet';
import NowDate from '../components/NowDate';
import ResultCard from '../components/ResultCard';
import ResultGraph from '../components/ResultGraph';
import { GetJobAPI } from '../api/OpenAPI';

const Result = () => {
    const dispatch = useDispatch();

    // redux에 저장된 이름값 읽어오기
    const name = useSelector((state) => state).name;
    const gender = useSelector((state) => state).gender;

    // 다시 검사하기 => 초기화 
    const onClickhandler = () => {
        dispatch(init());
    };

    //////////////////////////////////////////////////////////////////// api연결 (8월 24일)

    const bestWonScoreIndex = useSelector((state) => state).result.bestWonScoreIndex;
    const bestSecondWonScoreIndex = useSelector((state) => state).result.bestSecondWonScoreIndex;
    // const result = useSelector((state) => state).result;

    console.log('테스트',bestWonScoreIndex,bestSecondWonScoreIndex);

    useEffect(() => {
        const request = async () => {
            const response = await GetJobAPI();
            console.log('response',response)
            dispatch(actionSetResult(response));
        };
        request();
    }, []);


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
                        <button onClick={onClickhandler} className="restart">
                            다시 검사하기
                            </button>
                    </Link>
            </div>
        </>
    );
};

export default Result;

