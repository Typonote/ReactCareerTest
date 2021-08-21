const initState = {
    name: '',
    gender: '',
    question: [],
    answers: Array.from({ length: 29 }, () => 'None'),
    result: {
        graph: [],
        jobs: [],
        majors: [],
        maxValues: [],
        minValues: [],
    },
};

// reducer 만들기
const Reducer = (state = initState, action) => {
    switch (action.type) {
        case 'USER_NAME':
            return {
                ...state,
                name: action.name,
            };
        case 'USER_GENDER':
            return {
                ...state,
                gender: action.gender,
            };
        case 'GET_QUESTION':
            return {
                ...state,
                question: action.questions,
            };
        case 'SET_ANSWER':
            return {
                ...state,
                answers: state.answers.map((answer, index) => {
                    if (String(index) === action.index) {
                        return action.answer;
                    } else {
                        return answer;
                    }
                }),
            };
        case 'test/result':
            return {
                ...state,
                result: {
                    ...state.result,
                    graph: action.graph,
                    jobs: action.jobs,
                    majors: action.majors,
                    maxValues: action.maxValues,
                    minValues: action.minValues,
                },
            };
        case 'init':
            return {
                ...state,
                name: '',
                gender: '',
                answers: Array.from({ length: 29 }, () => 'None'),
                result: {
                    graph: [],
                    jobs: [],
                    majors: [],
                    maxValues: [],
                    minValues: [],
                },
            };
        // 케이스에 해당하지 않을때 반환할 기본값
        // return state : 아무것도 변경되지 않는다는 뜻
        default:
            return state;
    }
};

export default Reducer;
