import React from 'react';
// import { BasicMessageForm } from '../../forms/BasicForm';
// import { BasicMessagePanel } from '../BasicMessagePanel';
// import { QueryClient, QueryClientProvider } from 'react-query';

// export const queryClient = new QueryClient();

const SideMenu = () => {
  return (
    <>
      <div className='p-4'>
        <span className='text-white text-2xl font-bold'>Make</span>
        <div className='mb-4'>
	    <span className='text-gray-300 text-lg font-semibold'>Biosystems</span>
	    <h3 className='text-gray-400 cursor-pointer'>Stem Cells</h3>
	    <h3 className='text-gray-400 cursor-pointer'>Assembloids</h3>
	    <h3 className='text-gray-400 cursor-pointer'>Proliferate Cells</h3>
          </div>



          <div className='mb-4'>
	    <span className='text-gray-300 text-lg font-semibold'>Reagents</span>
	    <h3 className='text-gray-400 cursor-pointer'>Culture Media</h3>
          </div>

	  <span className='text-white text-2xl font-bold'>Move</span>
          <div className='mb-4'>
	    <span className='text-gray-300 text-lg font-semibold'>Onboard Biosystems</span>
	    <h3 className='text-gray-400 cursor-pointer'>Cheek Swab</h3>
	    <h3 className='text-gray-400 cursor-pointer'>Bulk-Onboard Cell Lines</h3>
	    <h3 className='text-gray-400 cursor-pointer'>Animal Sample</h3>
          </div>


          <div className='mb-4'>
	    <span className='text-gray-300 text-lg font-semibold'>Transport Biosystems</span>
	    <h3 className='text-gray-400 cursor-pointer'>Deliver To</h3>
          </div>

          <div className='mb-4'>
	    <span className='text-gray-300 text-lg font-semibold'>Transport Methods</span>
	    <h3 className='text-gray-400 cursor-pointer'>Warm Transfer (37ªC)</h3>
	    <h3 className='text-gray-400 cursor-pointer'>Cold Transfer</h3>
	    <h3 className='text-gray-400 cursor-pointer'>Next-Day Stem Cell Pickup</h3>
	  </div>

	  <span className='text-white text-2xl font-bold'>Bots</span>
          <div className='mb-4'>
	    <span className='text-gray-300 text-lg font-semibold'>Transport Bots</span>
	    <h3 className='text-gray-400 cursor-pointer'>BTB: Bio Transport Bot</h3>
	    <h3 className='text-gray-400 cursor-pointer'>+ Add New Bot</h3>
          </div>

          <div className='mb-4'>
	    <span className='text-gray-300 text-lg font-semibold'>Bioreactor Bots</span>
	    <h3 className='text-gray-400 cursor-pointer'>ACB: Automated Culture Bot</h3>
	    <h3 className='text-gray-400 cursor-pointer'>+ Add New Bot</h3>
          </div>



          <div className='mb-4'>
	    <span className='text-white text-2xl font-bold'>Build</span>
	    <h3 className='text-gray-400 cursor-pointer'>Docs</h3>
	    <h3 className='text-gray-400 cursor-pointer'>SDK</h3>
	    <h3 className='text-gray-400 cursor-pointer'>Apps</h3>
	  </div>

        </div>


    </>
  );
}

export default SideMenu;
