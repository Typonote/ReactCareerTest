import React from 'react';
import { useSelector } from 'react-redux';

const ResultLevelCard = () => {

    const job = useSelector((state) => state).job;

    const level = ["중졸",  "고졸", "전문대졸", "대졸", "대학원졸"]
    console.log('job',job);

    // job은 현재 2차원 배열!

    // 0: Array(3)
    //     0: 336
    //     1: "운동선수"
    //     2: 2

    const masterjol =[];
    for(let i =0; i < job.length; i++) {
        if(job[1]!==0){ // 값이 있는 경우 
            if(job[i][2] == 5){
                masterjol.push(job[i][1])
            }
        }
    };
    
    const daejol =[];
    for(let i =0; i < job.length; i++) {
        if(job[1]!==0){ // 값이 있는 경우 
            if(job[i][2] == 4){
                daejol.push(job[i][1])
            }
        }
    };
    
    const jeonjol =[];
    for(let i =0; i < job.length; i++) {
        if(job[1]!==0){ // 값이 있는 경우 
            if(job[i][2] == 3){
                jeonjol.push(job[i][1])
            }
        }
    };

    const kojol =[];
    for(let i =0; i < job.length; i++) {
        if(job[1]!==0){ // 값이 있는 경우 
            if(job[i][2] == 2){
                kojol.push(job[i][1])
            }
        }
    };
    
    const jungjol =[];
    for(let i =0; i < job.length; i++) {
        if(job[1]!==0){ // 값이 있는 경우 
            if(job[i][2] == 1){
                jungjol.push(job[i][1])
            }
        }
    };

    // console.log('kojol', kojol )
    
    return (
        <>
            <div className='title'> 
            <p>종사자 평균 학력별</p>
            </div>
            <table className='level-table'>
                <thead>
                    <tr>
                        <th>분야</th>
                        <th>직업명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{level[0]}</td>
                        <td>
                            {jungjol.join(', ')}
                        </td>
                    </tr>
                    <tr>
                        <td>{level[1]}</td>
                        <td>
                            {kojol.join(', ')}
                        </td>
                    </tr>
                    <tr>
                        <td>{level[2]}</td>
                        <td>
                            {jeonjol.join(', ')}
                        </td>
                    </tr>
                    <tr>
                        <td>{level[3]}</td>
                        <td>
                            {daejol.join(', ')} 
                        </td>
                    </tr>
                    <tr>
                        <td>{level[4]}</td>
                        <td>
                            {masterjol.join(', ')} 
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default ResultLevelCard;