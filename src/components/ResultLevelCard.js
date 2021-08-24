import React from 'react';

const ResultLevelCard = () => {




    
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
                        <td>중졸</td>
                        <td>중졸직업명....</td>
                    </tr>
                    <tr>
                        <td>고졸</td>
                        <td>고졸직업명....</td>
                    </tr>
                    <tr>
                        <td>전문대졸</td>
                        <td>전문대졸직업명....</td>
                    </tr>
                    <tr>
                        <td>대졸</td>
                        <td>대졸직업명....</td>
                    </tr>
                    <tr>
                        <td>대학원졸</td>
                        <td>대학원졸직업명....</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default ResultLevelCard;