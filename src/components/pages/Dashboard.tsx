import React from 'react';
import Footer from '../common/Footer';

const Dashboard: React.FC = () =>{ 

  return (
    <div>
      <Footer />
      <div className='flex flex-col items-center justify-center my-30'>
      <p className='text-5xl my-20'><span className='text-blue-500 text-6xl'>Welcome !!</span> to web reinvent<span >You are now on Dashboard !!</span></p>
    </div>
    </div>
  );
};

export default Dashboard;