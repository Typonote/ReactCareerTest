import React, { useEffect } from 'react';
import Home from './Home';
import Example from './Example';
import Play from './Play';
import Complete  from './Complete';
import Result from './Result';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionGetQuestion } from '../redux/action';
import { GetQuestionAPI } from '../api/OpenAPI';

const SetPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetch = async () => {
            const response = await GetQuestionAPI();
            dispatch(actionGetQuestion(response));
        };
        fetch();
    }, []);

    return (

        <Router>
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/example">
                    <Example />
                </Route>

                <Route  path="/play/1">
                    <Play page="1" />
                </Route> 

                <Route  path="/play/2">
                    <Play page="2" />
                </Route> 

                <Route path="/play/3">
                    <Play page="3" />
                </Route> 

                <Route  path="/play/4">
                    <Play page="4" />
                </Route> 

                <Route path="/play/5">
                    <Play page="5" />
                </Route> 

                <Route path="/play/6">
                    <Play page="6" />
                </Route> 

                <Route path="/complete">
                    <Complete  />
                </Route>

                <Route path="/result">
                    <Result />
                </Route>

            </Switch>
        </Router>
        
    );
};

export default SetPage;


// Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운 Array 객체를 만듭니다.
// 기존의 대상 array를 분해 혹은 특정 함수의 결과를 리턴 받아 새로운 array를 만듭니다.

// 
// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
// Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]