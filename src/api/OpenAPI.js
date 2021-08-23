import axios from 'axios';

export const API_KEY = 'acfd821c888dd0c8f4b24eefdce35eec';
export const Q_NUM = '6';

export const Q_URL = 'https://www.career.go.kr/inspct/openapi/test';  // question
export const R_URL = 'https://inspct.career.go.kr/inspct/api/psycho';  // result

export const GetQuestionAPI = async () => {
    const response = await axios.get(`${Q_URL}/questions?apikey=${API_KEY}&q=${Q_NUM}`);
    return response.data.RESULT;
};

// 결과 보내고 받아옴 => 나의 답변을 보내야함.
//예시
// pushResponse는 "https://www.career.go.kr/inspct/web/psycho/value/report?seq=NTQ5ODc4NTA" 이렇게 옴.

export const PostResultAPI = async (data) => { 
    const pushResponse = await axios.post(`${Q_URL}/report?apikey=${API_KEY}&q=${Q_NUM}` , data);
    const SEQ_NUM = pushResponse.data.RESULT.url.split('=')[1];
    const pullResponse = await axios.get(`${R_URL}/report?seq=${SEQ_NUM}`);
    // console.log("pullResponse", pullResponse);
    return pullResponse;
};


//8월 18일 수업
// GET https://www.career.go.kr/inspct/api/psycho/report?seq=NTQ5NzA5NDg 이 요청으로도 결과 정보를 받아올 수 있네요
// https://www.career.go.kr/inspct/api/psycho/report?seq=NTQ5NzA5NDg 