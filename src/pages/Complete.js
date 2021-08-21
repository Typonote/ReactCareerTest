import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MyProgressBar from '../components/MyProgressBar';

const Complete  = () => {

    // redux에 저장된 이름값 읽어오기
    const name = useSelector((state) => state).name;
    
    return (
        <>
            <div className="MyProgressBar">
                <MyProgressBar Percentage={100}></MyProgressBar>
            </div>
    
            <div className = "completion-information-container">
                <Helmet><title>직업가치관검사 - 완료</title></Helmet>
                <h1>검사 완료</h1>
                <p>{name}님 수고하셨습니다.</p>
                <p>검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고,<br></br> 
                중요 가치를 충족시킬 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</p>
                    <div className="advice-container">
                        <p>{name}님은 XX 성향이므로 XX 직업에 적합합니다.</p>
                    </div>   
            </div>
            <div className="completion-button-container">
                <Link to="/result" className="page-button-result">
                    <button>결과보기</button>
                </Link>
            </div>
        </>
    );
};

export default Complete;
