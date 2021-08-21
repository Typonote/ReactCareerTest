import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import QuestionCard from '../components/QuestionCard';
import { Helmet } from 'react-helmet';
import MyProgressBar from '../components/MyProgressBar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Example = () => {
    const sample = useSelector((state) => state.question[0]);
    const answer = useSelector((state) => state.answers[0]);

    // 0821 질문 2)
    const Failalert = () => {
        toast("체크하지 않은 문항이 있는지 확인해주세요.", {
            className: "custom-toast",
            draggable: true,
            position: toast.POSITION.BOTTOM_CENTER
        });
        console.log('클릭');
    };

    return (
        <>
        <Helmet><title>직업가치관검사 - 검사예시</title></Helmet>
            
            <div className="MyProgressBar">
                <MyProgressBar Percentage={12}></MyProgressBar>
            </div>

            <div className="example-container">
                <h1>검사예시</h1>
                <p>직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.</p>
                <p>가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</p>
                
                    <QuestionCard
                        qitemNo="0"
                        question={sample.question}
                        answer01={sample.answer01}
                        answer02={sample.answer02}
                        answer03={sample.answer03}
                        answer04={sample.answer04}
                        answerScore01={sample.answerScore01}
                        answerScore02={sample.answerScore02}
                    />
            </div>
            {/* 0821 질문 2) */}
            <div className="button-container">
                    <Link className="page-button-home" to="/" >
                        <button>
                            홈으로
                        </button>
                    </Link>
                    <Link className="page-button-start" to="/play/1" >
                        <button disabled={answer === 'None' ? true : false} onClick={Failalert}>
                            검사시작
                        </button>
                    </Link>
                    <ToastContainer autoClose={8000}/>
                    <button onClick={Failalert}>alert 테스트</button>
            </div>
        </>
    );
};

export default Example;
