import React, { useState } from 'react';
import Input from '../Input/Input';
import Radio from '../radiobutton/Radio';
import './Register.css';
import Button from '../Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [gender, setGender] = useState('Male');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const notify = () => {
    toast.success("Your data saved successfully");
  };
  


  
  const handleGenderChange = (value) => {
    if (gender !== value) {
      setGender(value);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if(password === rePassword) { 
      console.log(firstName, lastName, email, password, rePassword, gender);
      notify();
    } else {
      console.log("your password is incorrect")
    }
  };

  return (
    <div className='registerWork'>
      <ToastContainer />
      <h1>User Registration</h1>
      <Input 
        placeholder="First Name" 
        inputId="first-name" 
        type="text" 
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)} 
      />
      <Input 
        placeholder="Last Name" 
        inputId="last-name" 
        type="text"  
        value={lastName} 
        onChange={(e) => setLastName(e.target.value)} 
      />
      <Input 
        placeholder="Email" 
        inputId="email" 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <Input 
        placeholder="Password" 
        inputId="password" 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <Input 
        placeholder="Re-enter Password" 
        inputId="re-enter-password" 
        type="password" 
        value={rePassword} 
        onChange={(e) => setRePassword(e.target.value)} 
      />
      <div className='radioButton'>
        <Radio
          name="Gender"
          value="Male"
          label="Male"
          checked={gender === 'Male'}
          onChange={() => handleGenderChange('Male')}
        />
        <Radio
          name="Gender"
          value="Female"
          label="Female"
          checked={gender === 'Female'}
          onChange={() => handleGenderChange('Female')}
        />
        <Radio
          name="Gender"
          value="Others"
          label="Others"
          checked={gender === 'Others'}
          onChange={() => handleGenderChange('Others')}
        />
      </div>
      <Button name="Save" className="buttonWork" onClick={submit} />
    </div>
  );
};

export default Form;