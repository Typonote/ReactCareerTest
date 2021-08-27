import React from 'react';
import { useSelector } from 'react-redux';

// const getJobsByAffiliationNumber = (major, affiliationNumber) => {
//     const arr = [];
//     for (let i = 0; i < major.length; i++) {
//         if (major[i][2] === affiliationNumber) {
//         arr.push(major[i][1]);
//         } 
//     }
//     return arr;
// };

const ResultMajorCard = () => {
    
    const major = useSelector((state) => state).major;

    console.log('major',major);

    const affiliation = ["계열무관",  "인문", "사회", "교육", "공학","자연","의학","예체능"]
    

    const zeroMajor =[];
    for(let i =0; i < major.length; i++) {
        if(major[1]!==0){ // 값이 있는 경우 
            if(major[i][2] == 0){
                zeroMajor.push(major[i][1])
            }
        }
    };

    const oneMajor =[];
    for(let i =0; i < major.length; i++) {
        if(major[1]!==0){ // 값이 있는 경우 
            if(major[i][2] == 1){
                oneMajor.push(major[i][1])
            }
        }
    };

    const twoMajor =[];
    for(let i =0; i < major.length; i++) {
        if(major[1]!==0){ // 값이 있는 경우 
            if(major[i][2] == 2){
                twoMajor.push(major[i][1])
            }
        }
    };

    const threeMajor =[];
    for(let i =0; i < major.length; i++) {
        if(major[1]!==0){ // 값이 있는 경우 
            if(major[i][2] == 3){
                threeMajor.push(major[i][1])
            }
        }
    };

    const fourMajor =[];
    for(let i =0; i < major.length; i++) {
        if(major[1]!==0){ // 값이 있는 경우 
            if(major[i][2] == 4){
                fourMajor.push(major[i][1])
            }
        }
    };

    const fiveMajor =[];
    for(let i =0; i < major.length; i++) {
        if(major[1]!==0){ // 값이 있는 경우 
            if(major[i][2] == 5){
                fiveMajor.push(major[i][1])
            }
        }
    };

    const sixMajor =[];
    for(let i =0; i < major.length; i++) {
        if(major[1]!==0){ // 값이 있는 경우 
            if(major[i][2] == 6){
                sixMajor.push(major[i][1])
            }
        }
    };

    const sevenMajor =[];
    for(let i =0; i < major.length; i++) {
        if(major[1]!==0){ // 값이 있는 경우 
            if(major[i][2] == 7){
                sevenMajor.push(major[i][1])
            }
        }
    };


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
                <tr>
                    <td>{affiliation[0]}</td>
                    <td className="career">{zeroMajor.join(', ')}</td>
                </tr>
                <tr>
                    <td>{affiliation[1]}</td>
                    <td className="career">{oneMajor.join(', ')}</td>
                </tr>
                <tr>
                    <td>{affiliation[2]}</td>
                    <td className="career">{twoMajor.join(', ')}</td>
                </tr>
                <tr>
                    <td>{affiliation[3]}</td>
                    <td className="career">{threeMajor.join(', ')}</td>
                </tr>
                <tr>
                    <td>{affiliation[4]}</td>
                    <td className="career">{fourMajor.join(', ')}</td>
                </tr>
                <tr>
                    <td>{affiliation[5]}</td>
                    <td className="career">{fiveMajor.join(', ')}</td>
                </tr>
                <tr>
                    <td>{affiliation[6]}</td>
                    <td className="career">{sixMajor.join(', ')}</td>
                </tr>
                <tr>
                    <td>{affiliation[7]}</td>
                    <td className="career">{sevenMajor.join(', ')}</td>
                </tr>
            </tbody>
        </table>
    </>
    );
};

export default ResultMajorCard;