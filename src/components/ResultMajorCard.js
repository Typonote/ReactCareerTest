import React from 'react';

const ResultMajorCard = () => {
    
    return (
        <>
        <div className='title'> 
            <p>종사자 평균 전공별</p>
        </div>
        <table className='major-table'>
            <thead>
                <tr>
                    <th>분야</th>
                    <th>직업명</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>계열무관</td>
                    <td>계열무관직업명....</td>
                </tr>
                <tr>
                    <td>인문</td>
                    <td>인문직업명....</td>
                </tr>
                <tr>
                    <td>사회</td>
                    <td>사회직업명....</td>
                </tr>
                <tr>
                    <td>교육</td>
                    <td>교육직업명....</td>
                </tr>
                <tr>
                    <td>공학</td>
                    <td>공학직업명....</td>
                </tr>
                <tr>
                    <td>자연</td>
                    <td>자연직업명....</td>
                </tr>
                <tr>
                    <td>의학</td>
                    <td>의학직업명....</td>
                </tr>
                <tr>
                    <td>예체능</td>
                    <td>예체능직업명....</td>
                </tr>
            </tbody>
        </table>
    </>
    );
};

export default ResultMajorCard;