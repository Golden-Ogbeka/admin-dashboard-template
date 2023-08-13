import React from 'react';
import Button from '../../common/Button';
import LabelInput from '../../common/LabelInput/LabelInput';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { sendCatchFeedback, sendFeedback } from '../../functions/feedback';
import { appAxios } from '../../api/axios';
import { useNavigate, useParams } from 'react-router-dom';
import BackComponent from '../../common/BackComponent';

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const param = useParams();

  const formik = useFormik({
    initialValues: {
      email: param?.email,
      password: '',
      verificationCode: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      email: yup.string().email('Enter a valid email').required('Email is required'),
      password: yup.string().required('Password is required'),
      verificationCode: yup.string().required('Verification code is required'),
    }),
    enableReinitialize: true,
  });
  const submitValues = async () => {
    // try {
    //   setLoading(true);
    //   const response = await appAxios.patch('/auth/reset-password', {
    //     email: formik.values.email,
    //     password: formik.values.password,
    //     code: formik.values.verificationCode,
    //   });
    //   sendFeedback(response.data?.message, 'success');
    //   navigate('/auth/success');
    // } catch (error: any) {
    //   sendCatchFeedback(error);
    // } finally {
    //   setLoading(false);
    // }

    navigate('/auth/success');
  };

  const sendVerificationCode = async () => {
    try {
      setLoading(true);
      const response = await appAxios.post('/auth/forgot-password', {
        email: param?.email,
      });
      sendFeedback(response.data?.message, 'success');
    } catch (error: any) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BackComponent
        text='Back to forgot password'
        containerClass='absolute top-16 right-20'
        destination='/auth/forgot-password'
      />
      <h1 className='font-bold text-xl md:text-[26px] mb-[3px] font-poppins'>
        Reset Your Password
      </h1>
      <p className='md:text-lg mb-6'>Don’t get caught up again</p>
      <form onSubmit={formik.handleSubmit} className='w-full'>
        <LabelInput
          formik={formik}
          name='email'
          label='Email'
          type='email'
          className='mb-6'
          disabled
        />
        <LabelInput
          formik={formik}
          name='password'
          label='Password'
          type='password'
          className='mb-6'
        />
        <LabelInput
          formik={formik}
          name='verificationCode'
          label='Verification Code'
          className='mb-[22px]'
        />
        <div className='mb-[66px]'>
          <span className='text-sm font-normal '>
            Didn’t receive an OTP?{' '}
            <button
              className='text-primary font-semibold'
              type='button'
              onClick={sendVerificationCode}
            >
              Resend
            </button>
          </span>
        </div>
        <Button type='submit' loading={loading}>
          Reset Password
        </Button>
      </form>
    </>
  );
};

export default ResetPasswordForm;
