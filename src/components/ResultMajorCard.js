import React from 'react';
import { useSelector } from 'react-redux';



const ResultMajorCard = () => {
    
    const major = useSelector((state) => state).major;

    const affiliation = ["계열무관",  "인문", "사회", "교육", "공학","자연","의학","예체능"]
    
    const getMajorByAffiliationNumber = (major, affiliationNumber) => {  // 2번 
        const arr = [];
        for (let i = 0; i < major.length; i++) {
            if (major[i][2] === affiliationNumber) {
            arr.push(major[i][1]);
            } 
        }
        return arr;
    };


    const majors = []

    for (let i = 0; i < affiliation.length; i++){
        majors.push(getMajorByAffiliationNumber(major,i))
    }


    return (
        <>
        <div className='title'> 
            <p>종사자 평균 전공별</p>
        </div>
        <table className='major-table'>
            <thead>
                <tr>
                    <th className="branch">분야</th>
                    <th>직업명</th>
                </tr>
            </thead>
            <tbody>

                {majors.map((major, index)=>(
                    <tr>
                        <td>{affiliation[index]}</td>
                        <td className="career">{major.join(', ')}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </>
    );
};

export default ResultMajorCard;
