import React from 'react';
import { useSelector } from 'react-redux';

const ResultMajorCard = () => {
    
    const major = useSelector((state) => state).major;

    console.log('major',major);


    const affiliation = ["계열무관",  "인문", "사회", "교육", "공학","자연","의학","예체능"]

    // major는 현재 2차원 배열!

    // 0: Array(3)
    //     0: 407
    //     1: "직업군인"
    //     2: 0

    

    // const editMajor = (idx) => {

    //     const storeMajor =[];

    //     for(let i =0; i < major.length; i++) {
    //         if(major[1]!==0){ // 값이 있는 경우 
    //             if(major[i][2] == idx){
    //                 storeMajor.push(major[i][1]).join(', ')
    //             }
    //         }
    //     };

    //     return storeMajor;
    // };

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
                    <th>분야</th>
                    <th>직업명</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{affiliation[0]}</td>
                    <td>{zeroMajor.join(', ')}</td>
                </tr>
                <tr>
                    <td>{affiliation[1]}</td>
                    <td>{oneMajor.join(', ')}</td>
                </tr>
                <tr>
                    <td>{affiliation[2]}</td>
                    <td>{twoMajor.join(', ')}</td>
                </tr>
                <tr>
                    <td>{affiliation[3]}</td>
                    <td>{threeMajor.join(', ')}</td>
                </tr>
                <tr>
                    <td>{affiliation[4]}</td>
                    <td>{fourMajor.join(', ')}</td>
                </tr>
                <tr>
                    <td>{affiliation[5]}</td>
                    <td>{fiveMajor.join(', ')}</td>
                </tr>
                <tr>
                    <td>{affiliation[6]}</td>
                    <td>{sixMajor.join(', ')}</td>
                </tr>
                <tr>
                    <td>{affiliation[0]}</td>
                    <td>{sevenMajor.join(', ')}</td>
                </tr>
            </tbody>
        </table>
    </>
    );
};

export default ResultMajorCard;