import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import MyProgressBar from '../components/MyProgressBar';
import QuestionCard from '../components/QuestionCard';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Play = ({ page }) => {

    const history = useHistory();

    // redux에 저장된 값 읽어오기
    const questions = useSelector((state) => state.question);
    const answers = useSelector((state) => state.answers);

    const [playPage, setPlayPage] = useState([]);

    // 초기값은 비활성화된 상태 => return false면 비활성화+toast, return true는 enabled된 상태
    const [next, setNext] = useState(false); 
    


    // 5개씩 slice한 answers[]에서 빈 값이 있나 check.

    const noneChecked = (start, last) => {
        if (answers.slice(start, last).find((answer) => answer === 'None')) {
            return true; // none값이 있으면 true 반환
        }
            return false;
    };

    console.log(answers);

    // 문제 번호를 구하는 함수
    // index => {[0,1,2,3,4], [0,1,2,3,4], [0,1,2,3,4], [0,1,2,3,4], [0,1,2,3,4], [0,1,2]} 
    //             1페이지      2페이지      3페이지      4페이지       5페이지    6페이지
    // 1번 = 5(1-1)+(0+1) = 1
    // 13번 = 5(3-1)+(2+1) = 13
    // 27번 = 5(6-1)+(1+1) = 27
    const CalqitemNo = (page, index) => {
        return String(5 * (Number(page) - 1) + (Number(index) + 1));
    };
    

    // 페이지 번호에 맞춰 5개씩 slice하기
    // page: 1 => (0,5) => 인덱스 0(1번) 부터 인덱스 4(5번) 까지 trim.
    // page: 2 => (5,10) => 인덱스 5(6번) 부터 인덱스 9(10번) 까지 trim.
    // page: 5 => (20, 25) => 인덱스 20(21번) 부터 인덱스 24(25번) 까지 trim.
    useEffect(() => {
        setPlayPage(questions.slice(5 * (Number(page) - 1), 5 * Number(page)));

        // page의 결과 값이 모두 있으면 다음 버튼을 활성화 => 아니면 비활성화
        if (noneChecked(5 * (Number(page) - 1) + 1, 5 * Number(page) + 1)) {
            // page: 1 => noneChecked(1, 6) => answer를 1부터 5까지 check
            // page: 2 => noneCheked(6,11) => answer를 6부터 10까지 check
            // page: 3 => noneCheked(11,16) => answer를 11부터 15까지 check
            // page: 5 => noneCheked(21,26) => => answer를 21부터 25까지 check
            
            // true값이 나오면 (none값이 있는 경우)
            
            setNext(true);  // disabled
        } else {
            // none값이 없는 경우
            setNext(false); // enabled
        }
    }, [page]);



    // page: 1 => noneChecked(1, 6) => answer를 1부터 5까지 check
    // page: 2 => noneCheked(6,11) => answer를 6부터 10까지 check
    // page: 3 => noneCheked(11,16) => answer를 11부터 15까지 check
    // page: 5 => noneCheked(21,26) => => answer를 21부터 25까지 check

    // 값이 갱신될 때, 5개 값 확인 => 다시 answers 리스트로 반환
    useEffect(() => {
        setNext(noneChecked(5 * (Number(page) - 1) + 1, 5 * Number(page) + 1));
    }, [answers]);

    console.log("배열",answers);
    
    // Toast 함수 
    const NextAlert = () => {
        if (next === true) {
                return toast("다시 한 번 문항을 확인하세요", {
                className: "custom-toast",
                draggable: true,
                position: toast.POSITION.BOTTOM_CENTER,
            });
        } 

            if(page === '6'){
                history.push("/complete");
            }else{
                history.push(`/Play/${Number(page) + 1}`);
            }
    };
    
    return (
        <div>
            <Helmet><title>직업가치관검사 - 검사</title></Helmet>
            <div className="progress-container"> 
                <p>{page} of 6</p>
                <MyProgressBar Percentage={page*13+12}></MyProgressBar>
            </div>
            
            <div className="question-container">
                {playPage.map((question, index) => (
                    <QuestionCard
                        key={index}
                        qitemNo={CalqitemNo(page, index)}
                        question={question.question}
                        answer01={question.answer01}
                        answer02={question.answer02}
                        answer03={question.answer03}
                        answer04={question.answer04}
                        answerScore01={question.answerScore01}
                        answerScore02={question.answerScore02}
                    />
                ))}
            </div>
            
            <div className="question-button-container">
                
                <Link to={page === '1' ? '/example' : `/Play/${Number(page) - 1 }`} className="question-prev">
                    <button>이전</button>
                </Link>

                <Link to="/" className="question-home">
                    <button>홈으로</button>
                </Link>
                
                <button
                    className="question-next"
                    style={{
                        backgroundColor: next !== true ? "#57b846" : "#eaeaea",
                        border: next !== true ? "3px solid #57b846" : "3px solid #eaeaea",
                    }}
                    onClick={NextAlert}
                    >
                    <ToastContainer autoClose={8000} />다음
                </button>
                
            </div>
        </div>
    );
};

export default Play;
