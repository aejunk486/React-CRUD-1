import '../App.css'
import React, { useState } from 'react';
import {insertMember} from '../connectAPI/callMember';
import { useNavigate } from 'react-router-dom'; 

function InsertMember() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // เพิ่ม state สำหรับ message
  const navigate = useNavigate();


  const handleSubmit = async () => {
    // สร้าง object memberData
    const memberData = { 
      name: name,
      email: email
    };

    try {
      const data = await insertMember(memberData); //  ส่ง memberData เข้าไป
      setMessage(data.message);
      navigate("/memberListpage");
    } catch (err) {
      setMessage("เกิดข้อผิดพลาด: " + err.message);
    }
  };

  const handleCancle = () => {
    setName(''); 
    setEmail('');
  };

  return (
    <>
      <p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="กรอกชื่อ"
      />
      </p>
      <p>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="กรอกอีเมล์"
      />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button> 
        <button onClick={handleCancle}>Cancle</button>
      </p>
        {/* แสดงข้อความตอบกลับจาก API */}
        {message && <p>{message}</p>}
    </>
  );
}

export default InsertMember;
