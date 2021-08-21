import axios from 'axios';

export const API_KEY = 'acfd821c888dd0c8f4b24eefdce35eec';
export const Q_NUM = '6';

export const Q_URL = 'https://www.career.go.kr/inspct/openapi/test';  // question
export const R_URL = 'https://www.career.go.kr/inspct/api/psycho';  // result

export const GetQuestionAPI = async () => {
    const response = await axios.get(`${Q_URL}/questions?apikey=${API_KEY}&q=${Q_NUM}`);
    return response.data.RESULT;
};

export const PostResultAPI = async () => { // 결과 보내고 받아옴 => 나의 답변을 보내야함.
    const pushResponse = await axios.post(`${Q_URL}/questions?apikey=${API_KEY}&q=${Q_NUM}`);
    const pullResponse = await axios.get(`${Q_URL}/report?seq=${pushResponse}`);
    return pullResponse;
};


// GET https://www.career.go.kr/inspct/api/psycho/report?seq=NTQ5NzA5NDg 이 요청으로도 결과 정보를 받아올 수 있네요
// https://www.career.go.kr/inspct/api/psycho/report?seq=NTQ5NzA5NDg 