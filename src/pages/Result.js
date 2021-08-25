import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetJob, actionSetMajor, actionSetResult, init } from '../redux/action';
import { Helmet } from 'react-helmet';
import NowDate from '../components/NowDate';
import ResultCard from '../components/ResultCard';
import ResultGraph from '../components/ResultGraph';
import { GetJobAPI } from '../api/OpenAPI';
import axios from 'axios';

const Result = () => {
    const dispatch = useDispatch();

    // redux에 저장된 이름값 읽어오기
    const name = useSelector((state) => state).name;
    const gender = useSelector((state) => state).gender;
    const result = useSelector((state) => state).result;
    const job = useSelector((state) => state).job;

    // 다시 검사하기 => 초기화 
    const onClickhandler = () => {
        dispatch(init());
    };

    // 종사자 평균 학력별 직업 정보 요청 (성공)
    const GetJobAPI = async () => {
        
        const JobResponse = await axios.get(`https://inspct.career.go.kr/inspct/api/psycho/value/jobs?no1=${result.bestWonScoreIndex+1}&no2=${result.bestSecondWonScoreIndex+1}`);
        
        //console.log('JobResponse',JobResponse.data);
        dispatch(actionSetJob(JobResponse.data));
        return JobResponse.data;
    };


    // 종사자 평균 전공별 직업 정보 요청 (성공)
    const GetMajorAPI = async () => {
        
        const majorResponse = await axios.get(`https://inspct.career.go.kr/inspct/api/psycho/value/majors?no1=${result.bestWonScoreIndex+1}&no2=${result.bestSecondWonScoreIndex+1}`);
        
        //console.log('majorResponse',majorResponse.data);
        dispatch(actionSetMajor(majorResponse.data));
        return majorResponse.data;
    };

    useEffect(() => {
        GetJobAPI();
        GetMajorAPI();
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

