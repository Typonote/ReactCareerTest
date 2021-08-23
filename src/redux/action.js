//action.js
export const actionSetName = (name) => ({
    type: 'USER_NAME',
    name,
});

export const actionSetGender = (gender) => ({
    type: 'USER_GENDER',
    gender,
});

export const actionGetQuestion = (questions) => ({
    type: 'GET_QUESTION',
    questions,
});

export const actionSetAnswer = (answer, index) => ({
    type: 'SET_ANSWER',
    answer,
    index,
});

export const actionSetResult = (bestAbility, worstAbility,bestSecondAbility,worstSecondAbility) => ({
    type: 'SET_RESULT',
    bestAbility,
    worstAbility,
    bestSecondAbility,
    worstSecondAbility,
});

export const init = () => ({
    type: 'init',
});
