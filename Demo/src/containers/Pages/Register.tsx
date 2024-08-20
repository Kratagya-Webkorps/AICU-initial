import React, { useState } from 'react';
import '@material/web/all';
import MaterialButton from '../../components/MaterialButton';
import MaterialTextField from '../../components/MaterialTextField';
import logo from "../../assets/Welcome.png"; // Replace with the actual path to your logo

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleRegister = async () => {
    console.log({ email, password, repeatPassword });
    // Your registration logic here
  };

  return (
    <div className="h-svh flex bg-violet-50">
      {/* Left Side */}

      <img src={logo} alt="Logo" />

      {/* Right Side */}
      <div className="w-1/2 flex flex-col justify-center items-center ">
        <h2 className="text-2xl font-bold mb-8">Register</h2>
        <>
          <MaterialTextField
            label="E-Mail"
            type="email"
            value={email}
            onChange={setEmail}
            className="mb-4 bg-white"
          />
          <MaterialTextField
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            className="mb-4"
          />
          <MaterialTextField
            label="Repeat Password"
            type="password"
            value={repeatPassword}
            onChange={setRepeatPassword}
            className="mb-8"
          />
          <MaterialButton
            className="w-full bg-sky-700 font-bold hover:bg-blue-700 text-white"
            label="Sign up"
            onClick={handleRegister}
          />
          <p className="text-sm text-gray-600 ">
            Already have an account?{" "}
            <a href="/" className="text-sky-700 hover:underline">
              Login
            </a>
          </p>
        </>
      </div>
    </div>
  );
};

export default Register;
