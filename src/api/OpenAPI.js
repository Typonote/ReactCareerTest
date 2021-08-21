import axios from 'axios';

export const API_KEY = 'c4115cd15ddcb05d8a6533b287705c6f';
export const Q_NUM = '6';

export const Q_URL = 'https://www.career.go.kr/inspct/openapi/test';

export const GetQuestionAPI = async () => {
    const response = await axios.get(`${Q_URL}/questions?apikey=${API_KEY}&q=${Q_NUM}`);
    return response.data.RESULT;
};
