/*eslint-disable*/
import React, {useState} from 'react';
import Input from 'components/Input';
import './SignUp.css';



const SignUp = () => {
    
    const [values, setValues] = useState({
        email: "",
        password: "",
        passwordCheck: "",
        name: "",
        age: ""
    })  

    /*
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    */

    function BtnCheck() {
        alert(values.name + " 님 환영합니다!");
    }
    
    const HandleChange = (e) => {          
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
        
        //setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault() //submit 관련 고유 동작 중단시키기
        //console.log(JSON.stringify(values, null, 2))
        
    }

    return (
        <div className="form-wrapper">
            <h1>회원가입</h1>
            <form className="form" onSubmit={handleSubmit}>

                <Input title="이메일" type="email" required onChange={HandleChange} value={values.email}></Input>
                <Input title="비밀번호" type="password" required onChange={HandleChange} value={values.password}></Input>
                <Input title="비밀번호 재확인" type="password" required onChange={HandleChange} value={values.passwordCheck}></Input>
                {values.password !== values.passwordCheck && <span style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</span>}

                <Input title="이름" type="text" onChange={HandleChange} value={values.name}></Input>
                <Input title="나이" type="number" onChange={HandleChange} value={values.age}></Input>

                <div
                    style={{ marginTop: "30px" }}>
                    <button className="btn" type="submit" onClick={BtnCheck}>가입하기</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;