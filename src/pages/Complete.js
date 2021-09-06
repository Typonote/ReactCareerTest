import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_KEY, PostResultAPI, Q_NUM } from '../api/OpenAPI';
import DisplayAbility from '../components/DisplayAbility';
import MyProgressBar from '../components/MyProgressBar';
import { actionSetResult } from '../redux/action';

const Complete  = () => {

    const dispatch = useDispatch();
    const name = useSelector((state) => state).name;
    const gender = useSelector((state) => state).gender;

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

    // 준비된 postDictionatry 배열 post로 보냄.
    useEffect(() => {
        const request = async () => {
            const response = await PostResultAPI(postDictionatry);             // 받은 결과 1=3 2=4 3=3 4=4 5=4 6=3 7=3 8=4 
            
            const wonScore = response.data.result.wonScore.split(' ').splice(0, 8).map((answer) => Number(answer.split('=')[1]));      
            // 출력결과: wonScore  [3, 4, 3, 4, 4, 3, 3, 4]
            
            const Ability = ['능력발휘', '자율성', '보수', '안정성', '사회적 인정', '사회봉사', '자기계발', '창의성'];

            const wonScoreArr = wonScore.map((value, index) => ({value, index})).sort((a,b) => a.value - b.value )

            const bestWonScore = wonScoreArr.slice(wonScoreArr.length -2);  // 0: {value: 4, index: 4}   1: {value: 4, index: 7}     =>  사회적 인정, 창의성
            const worstWonScore = wonScoreArr.slice(0,2);                   // 0: {value: 3, index: 0}   1: {value: 3, index: 2}     =>  능력발휘, 보수

            const bestWonScoreIndex = bestWonScore[0].index;            // 최대값: 출력결과 = 4
            const bestSecondWonScoreIndex = bestWonScore[1].index;      // 두번째 최대값: 출력결과 = 7
            const worstWonScoreIndex = worstWonScore[0].index;          // 최소값: 출력결과 = 0 
            const worstSecondWonScoreIndex =  worstWonScore[1].index;   // 두번쨰 최소값: 출력결과 = 2

            const bestAbility = Ability[bestWonScoreIndex];                     // 출력결과 = 사회적 인정
            const bestSecondAbility = Ability[bestSecondWonScoreIndex];         // 출력결과 = 창의성
            const worstAbility = Ability[worstWonScoreIndex];                   // 출력결과 = 능력발휘
            const worstSecondAbility = Ability[worstSecondWonScoreIndex];       // 출력결과 = 보수

            console.log(bestAbility,bestSecondAbility,worstAbility,worstSecondAbility,bestWonScoreIndex,bestSecondWonScoreIndex)

            dispatch(actionSetResult(bestAbility,worstAbility,bestSecondAbility,worstSecondAbility,bestWonScoreIndex,bestSecondWonScoreIndex,wonScore));
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
                    <DisplayAbility />   
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


