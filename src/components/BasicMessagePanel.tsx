import React from 'react';
import { BasicMessageForm } from '../forms/BasicForm';

interface Props {
  type?: string;
  text?: string;
}
export const BasicMessagePanel = ({ type = 'contact', text }: Props) => {
  return (
    <div className='relative bg-white'>
      <div className='absolute inset-0 h-full w-1/2 md:bg-white'></div>
      <div className='relative md:p-10 max-w-7xl mx-auto lg:grid lg:grid-cols-5'>
        <div className='bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
          <div className='max-w-lg mx-auto'>
            <h2 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
              Get in touch
            </h2>
            <p className='mt-3 text-lg leading-6 text-gray-500'>
              {text
                ? text
                : 'Have questions or just want to get in touch, drop us a line or submit the form.'}
            </p>
            <dl className='mt-8 text-base text-gray-500'>
              <div className='mt-3'>
                <dt className='sr-only'>Email</dt>
                <dd className='flex'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  <span className='ml-3'>support@celltonomy.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {/* Right column */}
        <div className='bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
          <div className='max-w-lg mx-auto lg:max-w-none'>
            <BasicMessageForm type={type} />
          </div>
        </div>
      </div>
    </div>
  );
};
