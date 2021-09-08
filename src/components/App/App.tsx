// import logo from './assets/logo.svg';
// Lettering;
// ('celltonomy');
// font: syncopate;

import React from 'react';
import '../../styles/index.css';
import './App.css';
import { Helmet } from 'react-helmet';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BasicMessageForm } from '../../forms/BasicForm';
import { BasicMessagePanel } from '../BasicMessagePanel';
import Superbar from '../Superbar/Superbar'
import SideMenu from '../SideMenu/SideMenu'

export const queryClient = new QueryClient();
// ('Autonomous Cell Culture Systems');
// font: arial;

function App() {
  return (
    <QueryClientProvider client={queryClient}>

      <Helmet>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      </Helmet>

      <div className='min-h-screen bg-black-900 black-chrome-gradient overflow-hidden'>
        <Superbar/>
	<div className='flex flex-row'>
          <SideMenu/>
	  <div className='flex w-full'>
            <div className='w-full mx-auto md:p-20'>
	      <h2 className='text-white'>Contact</h2>
              <BasicMessageForm />
            </div>
          </div>
	</div>

      </div>

    </QueryClientProvider>
  );
}

export default App;
