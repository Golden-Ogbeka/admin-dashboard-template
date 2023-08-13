import React from 'react';
import LogoImage from '../../assets/brand/logo.svg';
import LogoWhiteImage from '../../assets/brand/logo-white.svg';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-row flex-nowrap'>
      <div className='flex-[40%] min-h-screen auth-bg hidden md:flex flex-col px-primary justify-center text-white'>
        <img
          src={LogoWhiteImage}
          alt='Brand'
          className='h-auto w-[167px] object-cover mb-3'
        />

        <p className='text-lg'>Brand Info</p>
      </div>
      <main className='flex-[60%] flex flex-col items-center md:items-start justify-center min-h-screen p-4 md:p-16 py-8 relative bg-[#F6F7F9]'>
        <div className='bg-white px-4 md:px-8 pb-16 pt-[118px] w-full text-[#333333]'>
          <img
            src={LogoImage}
            alt='Brand'
            className='h-auto w-[200px] object-contain md:hidden mb-8'
          />
          {children}
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
