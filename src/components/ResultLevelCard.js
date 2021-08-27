import React from 'react';
import { useSelector } from 'react-redux';

const ResultLevelCard = () => {

    const job = useSelector((state) => state).job;

    const level = ["중졸",  "고졸", "전문대졸", "대졸", "대학원졸"]

    const getLevelByAffiliationNumber = (job, levelNumber) => {  
        const arr = [];
        for (let i = 0; i < job.length; i++) {
            if (job[i][2] === levelNumber+1) {
            arr.push(job[i][1]);
            } 
        }
        return arr;
    };

    const levels = []

    for (let i = 0; i < level.length; i++){
        levels.push(getLevelByAffiliationNumber(job,i))
    }
    
    return (
        <>
            <div className='title'> 
            <p>종사자 평균 학력별</p>
            </div>
            <table className='level-table'>
                <thead>
                    <tr>
                        <th className="branch">분야</th>
                        <th >직업명</th>
                    </tr>
                </thead>
                <tbody>
                    {levels.map((job, index)=>(
                        <tr>
                            <td>{level[index]}</td>
                            <td className="career">{job.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ResultLevelCard;