import React from 'react';
import { useSelector } from 'react-redux';



// 현재시간 컴포넌트
const ResultGraph = () => {

    // wonscore 값을 가져와야 함 
    const wonScore = useSelector((state) => state).result.wonScore;

    return (
        <>
            <section id="tall">
                <article className="tall">

                    <div>
                        <p>능력발휘
                            <span></span>
                            <span 
                                className="tall"
                                style={{
                                    width: `${wonScore[0]}*10%`,
                            }}>{wonScore[0]}</span>
                        </p>
                    </div>

                    <div>
                        <p>자율성
                            <span></span>
                            <span className="tall">{wonScore[1]}</span>
                        </p>
                    </div>

                    <div>
                        <p>보수
                            <span></span>
                            <span className="tall">{wonScore[2]}</span>
                        </p>
                    </div>

                    <div>
                        <p>안정성
                            <span></span>
                            <span className="tall" >{wonScore[3]}</span>
                        </p>
                    </div>

                    <div>
                        <p>사회적 인정
                            <span></span>
                            <span className="tall">{wonScore[4]}</span>
                        </p>
                    </div>

                    <div>
                        <p>사회봉사
                            <span></span>
                            <span className="tall">{wonScore[5]}</span>
                        </p>
                    </div>

                </article>
            </section>
        </>
    );
};

export default ResultGraph;

// const Ability = ['능력발휘', '자율성', '보수', '안정성', '사회적 인정', '사회봉사', '자기계발', '창의성'];