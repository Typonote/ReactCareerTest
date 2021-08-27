import React from 'react';
import { useSelector } from 'react-redux';

const ResultGraph = () => {

    // wonscore 값을 가져와야 함 
    const wonScore = useSelector((state) => state).result.wonScore;

    const Ability = ['능력발휘', '자율성', '보수', '안정성', '사회적 인정', '사회봉사', '자기계발', '창의성'];

    const graphRendering = () => {
        const graph = [];
        for (let i = 0; i < Ability.length; i++) {
            graph.push(<div>
                <p>{Ability[i]}
                    <span></span>
                    <span 
                        className="tall"
                        style={{
                            width: `${wonScore[i]*10}%`,
                    }}>{wonScore[i]}</span>
                </p>
            </div>);
        }
        return graph;
    };

    return (
        <>
        <div className='resultgraph-title'>
            <h2>직업가치관 결과</h2>
        </div>
            <section id="tall">
                <article className="tall">

                    {graphRendering()}

                </article>
            </section>
        </>
    );
};

export default ResultGraph;
