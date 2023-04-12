import React from 'react'

import Input from 'components/Input';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="form-wrapper">
            <h1>회원가입</h1>
            <form className="form">
                <h1>회원가입</h1>
                <Input title="이메일" type="email" required></Input>
                <Input title="비밀번호" type="password" required></Input>
                <Input title="비밀번호 재확인" type="password" required></Input>
                <Input title="이름" type="text"></Input>
                <Input title="나이" type="number"></Input>
                <div
                    style={{ marginTop: "30px" }}>
                    <button className="btn" type="submit">가입하기</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;