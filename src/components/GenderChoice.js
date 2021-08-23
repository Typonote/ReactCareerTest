import React from 'react';

const GenderChoice = ({ onChangehandler }) => {
    return (
        <div className="user-gender-container">
                {/* 0821 질문 1) */}
                <input type="radio" id="man" value="man" name="gender" onChange={onChangehandler} />
                <label for="man">남성</label>
            
                <input type="radio" id="woman" value="woman" name="gender" onChange={onChangehandler} />
                <label for="woman">여성</label>
            
        </div>
    );
};

export default GenderChoice;
