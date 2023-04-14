/*eslint-disable*/
import React, {useState} from 'react';
import Input from 'components/Input';
import './SignUp.css';



const Test = () => {
    
    const [values, setValues] = useState({
        
        email: "",
        pw: "",
        pwCheck: "",
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
            [e.target.id]: e.target.value,
        })
        
        
        //setValue(e.target.value);
    }

    const onReset = (e) => {
        setValues({
            email: "",
            pw: "",
            pwCheck: "",
            name: "",
            age: ""
        })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault() //submit 관련 고유 동작 중단시키기
        console.log(JSON.stringify(values, null, 2))
        
    }

    return (
        <div className="form-wrapper">
            <h1>회원가입</h1>
            <form className="form" onSubmit={handleSubmit}>

                <Input id="email" title="이메일" type="email" required HandleChange={HandleChange} value={values.email}></Input>
                <Input id="pw" title="비밀번호" type="password" required HandleChange={HandleChange} value={values.pw}></Input>
                <Input id="pwCheck" title="비밀번호 재확인" type="password" required HandleChange={HandleChange} value={values.pwCheck}></Input>
                {values.pw !== values.pwCheck && <span style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</span>}

                <Input id="name" title="이름" type="text" HandleChange={HandleChange} value={values.name}></Input>
                <Input id="age" title="나이" type="number" HandleChange={HandleChange} value={values.age}></Input>

                <div
                    style={{ marginTop: "30px" }}>
                    <button className="btn" type="submit" onClick={BtnCheck}>가입하기</button>
                    <button className="btn" onClick={onReset}>초기화</button>
                </div>
            </form>
        </div>
    );
};

export default Test;