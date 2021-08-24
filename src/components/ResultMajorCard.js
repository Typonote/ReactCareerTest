import React from 'react';
import { useSelector } from 'react-redux';

const ResultMajorCard = () => {
    
    const major = useSelector((state) => state).major;

    console.log('major',major);


    const affiliation = ["계열무관",  "인문", "사회", "교육", "공학","자연","의학","예체능"]

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
                    <td>{affiliation[0]}</td>
                    <td>계열무관직업명....</td>
                </tr>
                <tr>
                    <td>{affiliation[1]}</td>
                    <td>인문직업명....</td>
                </tr>
                <tr>
                    <td>{affiliation[2]}</td>
                    <td>사회직업명....</td>
                </tr>
                <tr>
                    <td>{affiliation[3]}</td>
                    <td>교육직업명....</td>
                </tr>
                <tr>
                    <td>{affiliation[4]}</td>
                    <td>공학직업명....</td>
                </tr>
                <tr>
                    <td>{affiliation[5]}</td>
                    <td>자연직업명....</td>
                </tr>
                <tr>
                    <td>{affiliation[6]}</td>
                    <td>의학직업명....</td>
                </tr>
                <tr>
                    <td>{affiliation[0]}</td>
                    <td>예체능직업명....</td>
                </tr>
            </tbody>
        </table>
    </>
    );
};

export default ResultMajorCard;