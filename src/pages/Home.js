import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionSetName, actionSetGender } from '../redux/action';
import GenderChoice from '../components/GenderChoice';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';



const Home = () => {
    const dispatch = useDispatch();
    
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const state = useSelector((state) => state);

    useEffect(() => {
        console.log(state);
    }, []);
    const onChangeNamehandler = (e) => {
        setName(e.target.value);
    };

    const onChangeGenderhandler = (e) => {
        setGender(e.target.value);
    };

    const homeClickhandler = () => {
        dispatch(actionSetName(name));
        dispatch(actionSetGender(gender));
    };

    return (
        <>
            <Helmet><title>직업가치관검사 - 메인홈</title></Helmet>
            <div id="home">
                <section>
                    <h1>직업가치관검사</h1>

                    <div className="user-name-container">
                        <input type="text"  placeholder="이름을 입력하세요" onChange={onChangeNamehandler} value={name} />

                        <GenderChoice onChangehandler={onChangeGenderhandler} />

                    </div>

                    <div className="play-button-container">   
                        
                            <Link to="/example" className="play-button">
                                <button disabled={name !== '' && gender !== '' ? false : true} onClick={homeClickhandler}>
                                시작하기
                                </button>
                            </Link>
                            
                    </div>

                </section>
            </div>
        </>
    );
};

export default Home;
