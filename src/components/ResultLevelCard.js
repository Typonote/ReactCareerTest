import React from 'react';
import { useSelector } from 'react-redux';

const ResultLevelCard = () => {

    const job = useSelector((state) => state).job;

    console.log('job',job);

    
    const level = ["중졸",  "고졸", "전문대졸", "대졸", "대학원졸"]

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
                        <td></td>
                    </tr>
                    <tr>
                        <td>{level[1]}</td>
                        <td>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>{level[2]}</td>
                        <td>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>{level[3]}</td>
                        <td>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>{level[4]}</td>
                        <td>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default ResultLevelCard;