import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_KEY, PostResultAPI, Q_NUM } from '../api/OpenAPI';
import MyProgressBar from '../components/MyProgressBar';

const Complete  = () => {

    const dispatch = useDispatch();
    const name = useSelector((state) => state).name;
    const gender = useSelector((state) => state).gender;

    const Ability= ['능력발휘', '자율성', '보수', '안정성', '사회적 인정', '사회봉사', '자기계발', '창의성'];
    

    // post보낼 배열 준비
    const postDictionatry= {
        apikey: API_KEY,
        qestrnSeq: Q_NUM,
        trgetSe: '100209',
        name: name,
        gender: gender === 'man' ? '100323' : '100324',
        grade: '2',
        startDtm: Date.now(),

        //B1= 1 B2= 4 이런식으로 문제 번호 앞에 B를 붙어야함=> B+'문제번호(index) = 답변(answer)'
        answers: useSelector((state) => state).answers
            .map((answer, index) => {
                if (index > 0) {
                    return `B${Number(index)}=${answer}`;
                }
            }).join(' ').trim()
    };

    //console.log(postDictionatry);

    
    // 준비된 postDictionatry 배열 post로 보냄.
    useEffect(() => {
        const request = async () => {
            const response = await PostResultAPI(postDictionatry);
    
            console.log('response',response);
        };

        request();
    }, []);

    
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
                        <p>{name}님은 직업생활과 관련하여 {}(와)과 {}(을)를 가장 중요하게 생각합니다.</p>
                        <p>반면에 {}, {}은 상대적으로 덜 중요하게 생각합니다.</p>
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
