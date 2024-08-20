import React, { useState } from 'react';
import '@material/web/all';
import MaterialButton from '../../components/MaterialButton';
import MaterialTextField from '../../components/MaterialTextField';
import useUserStore from '../../globalStore/useDemoStore';
import UserTable from './UserTable';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const { fetchUserData } = useUserStore();

  const handleRegister = async () => {
console.log({email,password,repeatPassword});
    await fetchUserData();
  };

  return (
    <div className="min-h-screen flex">
      {/* Registration Form */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Register</h2>
          </div>
          <MaterialTextField
            label="E-Mail"
            type="email"
            value={email}
            onChange={setEmail}
          />
          <MaterialTextField
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <MaterialTextField
            label="Repeat Password"
            type="password"
            value={repeatPassword}
            onChange={setRepeatPassword}
          />

          <MaterialButton className=' bg-red-500' label="Sign up" onClick={handleRegister} />

          <div className="text-center mt-4">
            <p>
              Already have an account?{" "}
              <a href="/" className="text-blue-500">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* User Data Table */}
      {email && password && <UserTable />}
    </div>
  );
};

export default Register;
