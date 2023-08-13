import React from 'react';
import Button from '../../common/Button';
import LabelInput from '../../common/LabelInput/LabelInput';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { sendCatchFeedback, sendFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import BackComponent from '../../common/BackComponent';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      email: yup.string().email('Enter a valid email').required('Email is required'),
    }),
  });
  const submitValues = async () => {
    // try {
    //   setLoading(true);
    //   const response = await appAxios.post('/auth/forgot-password', {
    //     email: formik.values.email,
    //   });
    //   sendFeedback(response.data?.message, 'success');
    //   navigate(`/auth/reset-password/${formik.values.email}`);
    // } catch (error: any) {
    //   sendCatchFeedback(error);
    // } finally {
    //   setLoading(false);
    // }
    navigate(`/auth/reset-password/${formik.values.email}`);
  };

  return (
    <>
      <BackComponent
        text='Back to Login'
        containerClass='absolute top-10'
        destination='/auth/login'
      />
      <h1 className='font-bold text-xl md:text-[26px] mb-[3px] font-poppins'>
        Forgot Password?
      </h1>
      <p className='md:text-lg mb-6'>You don't have to worry. Enter your email below.</p>
      <form onSubmit={formik.handleSubmit} className='w-full'>
        <LabelInput
          formik={formik}
          name='email'
          label='Email'
          type='email'
          className='mb-[66px]'
        />

        <Button type='submit' loading={loading}>
          Send Verification Code
        </Button>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
