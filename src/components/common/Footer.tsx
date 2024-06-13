import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../../states/slices/userSlice';

const Footer: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
        navigate('/signin');
        dispatch(logout());
    }

//     const user = useSelector((state: RootState) => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/signin');
//   };

//   if (!user.isAuthenticated) {
//     navigate('/signin');
//     return null;
//   }
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <span className="text-lg font-bold">Web Reinvent</span>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </footer>
  );
};

export default Footer;
