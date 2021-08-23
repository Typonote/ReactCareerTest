import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const DisplayAbility  = () => {

    const bestAbility = useSelector((state) => state).result.bestAbility;
    const worstAbility= useSelector((state) => state).result.worstAbility;
    const bestSecondAbility = useSelector((state) => state).result.bestSecondAbility;
    const worstSecondAbility = useSelector((state) => state).result.worstSecondAbility;

    const name = useSelector((state) => state).name;
    
    return (
        <>
            <div className="advice-container">
                    <p>{`${name}님은 직업생활과 관련하여 ${bestAbility}(와)과 ${bestSecondAbility}(을)를 가장 중요하게 생각합니다.`}</p>
                    <p>{`반면에 ${worstAbility}(와)과 ${worstSecondAbility}은 상대적으로 덜 중요하게 생각합니다.`}</p>
            </div>  
        </>
    );
};

export default DisplayAbility;
