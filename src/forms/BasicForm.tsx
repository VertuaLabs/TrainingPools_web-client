import React, { useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useMutation } from 'react-query';

import FirebaseClient from '../api/firebase/firebase_client';
import { Spinner } from '../components/Spinner';

interface Props {
  type?: string;
}

export const BasicMessageForm = (props: Props) => {
  const user = FirebaseClient.auth?.currentUser;
  const [status, setStatus] = useState('');
  const mutation = useMutation(
    async (values: any) => {
      const { email, name, message } = values;
      return FirebaseClient.db
        .collection('basicEnquires')
        .doc()
        .set({ email, name, message });
    },
    {
      onSuccess: (data) => {
        setStatus("Thanks for the message! We'll be in contact shortly.");
      },
    },
  );
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        message: '',
      }}
      onSubmit={(values, { setSubmitting }: FormikHelpers<any>) => {
        mutation.mutate(values);
      }}>
      <Form>
        {/* NAME */}
        <div className='mt-3'>
          <label
            htmlFor='name'
            className='sr-only block text-sm font-medium text-gray-700'>
            Name
          </label>
          <div className='mt-1'>
            <Field
              type='text'
              name='name'
              id='name'
              autoComplete='name'
              className='bg-gray-100 px-1 py-2 shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md'
              placeholder='Full name'
            />
          </div>
        </div>
        {/* EMAIL */}
        <div className='mt-3'>
          <label
            htmlFor='email'
            className='sr-only block text-sm font-medium text-gray-700'>
            Email
          </label>
          <div className='mt-1'>
            <Field
              type='text'
              name='email'
              id='email'
              autoComplete='email'
              className='bg-gray-100 px-1 py-2 shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md'
              placeholder='Email'
            />
          </div>
        </div>
        {/* MESSAGE */}
        <div className='mt-3'>
          <label
            htmlFor='message'
            className='sr-only block text-sm font-medium text-gray-700'>
            Message
          </label>
          <div className='mt-1'>
            <Field
              as='textarea'
              type='textarea'
              name='message'
              id='message'
              rows={4}
              className='bg-gray-100 px-1 py-2 shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md'
              placeholder='Message'
            />
          </div>
        </div>

        <div className='flex justify-end mt-2'>
          <button
            className='bg-gray-500 text-white px-8 py-2 rounded-full'
            type='submit'>
            {mutation.isLoading && <Spinner />}
            Submit
          </button>
        </div>
        {status && <div>{status}</div>}
      </Form>
    </Formik>
  );
};
