import React from 'react';

const GenderChoice = ({ onChangehandler }) => {
    return (
        <div className="user-gender-container">
                {/* 0821 질문 1) */}
                <input type="radio" id="man" value="남성" name="gender" onChange={onChangehandler} />
                <label for="man">남성</label>
            
                <input type="radio" id="woman" value="여성" name="gender" onChange={onChangehandler} />
                <label for="woman">여성</label>
            
        </div>
    );
};

export default GenderChoice;
