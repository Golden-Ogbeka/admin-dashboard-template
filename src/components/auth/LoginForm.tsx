import React from 'react';
import Button from '../../common/Button';
import LabelInput from '../../common/LabelInput/LabelInput';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { sendCatchFeedback, sendFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import { useAppDispatch } from '../../store/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { updateUser } from '../../store/slices/user';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      email: yup.string().email('Enter a valid email').required('Email is required'),
      password: yup.string().required('Password is required'),
    }),
  });
  const submitValues = async () => {
    // try {
    //   setLoading(true);
    //   const response = await appAxios.post('/auth/login', {
    //     email: formik.values.email,
    //     password: formik.values.password,
    //   });
    //   const userObject = response.data?.data;
    //   dispatch(updateUser({ user: userObject }));
    //   if (!userObject.isVerified) {
    //     // Send verification code
    //     sendFeedback('Verify your account to continue', 'info');
    //     await appAxios.get('/auth/send-verification');
    //     return navigate('/auth/verify-account');
    //   }
    //   sendFeedback(response.data?.message, 'success');
    //   return navigate('/dashboard');
    // } catch (error: any) {
    //   sendCatchFeedback(error);
    // } finally {
    //   setLoading(false);
    // }
    return navigate('/dashboard');
  };

  return (
    <>
      <h1 className='font-bold text-xl md:text-[26px] mb-[3px] font-poppins'>
        Hello Again!
      </h1>
      <p className='md:text-lg mb-6'>Welcome Back</p>
      <form onSubmit={formik.handleSubmit} className='w-full '>
        <LabelInput
          formik={formik}
          name='email'
          label='Email'
          type='email'
          className='mb-6'
        />
        <LabelInput
          formik={formik}
          name='password'
          label='Password'
          type='password'
          className='mb-[32px]'
        />

        <Button type='submit' loading={loading}>
          Login
        </Button>
        <div className='mt-[18px] text-center'>
          <Link to='/auth/forgot-password' className='text-sm font-normal opacity-70'>
            Forgot password
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
