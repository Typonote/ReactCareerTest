const initState = {
    name: '',
    gender: '',
    question: [],
    answers: Array.from({ length: 29 }, () => 'None'),
    result: {
        bestAbility: '',
        worstAbility: '',
        bestSecondAbility: '',
        worstSecondAbility: '',
    }
};


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

        case 'SET_RESULT':
            return {
                ...state,
                result: {
                    ...state.result,
                    bestAbility: action.bestAbility,
                    worstAbility: action.worstAbility,
                    bestSecondAbility: action.bestSecondAbility,
                    worstSecondAbility: action.worstSecondAbility,
                }
            };
        
        case 'init':
            return {
                ...state,
                name: '',
                gender: '',
                answers: Array.from({ length: 29 }, () => 'None'),
                result: {
                    bestAbility: '',
                    worstAbility: '',
                    bestSecondAbility: '',
                    worstSecondAbility: '',
                }
            };
        
        default:
            return state;
    }
};

export default Reducer;
