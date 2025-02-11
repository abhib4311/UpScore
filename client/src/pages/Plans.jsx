import React from 'react'
import Button from '../components/CommonCom/Button'
import { Link } from "react-router-dom";

const DownloadScore = () => {
  return (
    <div className='max-w-4xl flex flex-col lg:flex-row mx-auto p-6 bg-white shadow-lg rounded-lg items-center space-y-6 mt-30 gap-10'>
      <div className='lg:w-[50%] flex  flex-col mt-10'>
        <div className=' flex gap-5 flex-row '>
            <div>
                <p className="text-3xl font-semibold items-center justify-center text-gray-900 w-80 mb-1">Download Your</p>
                <p className='text-3xl font-semibold items-center justify-center text-[#E42E68] w-80 mb-5'>Credit Health Report</p>
                <i className='text-lg font-semibold text-justify text-gray-600  w-[80%]'>Gain an in-depth understanding of your credit profile.</i>
            </div>
            <div >
                <img src= "./Images/Download.avif" className='w-30 ' alt="download" />
            </div>
        </div>
        <div>
        <ul className="list-disc list-inside space-y-2 mt-5 font-semibold text-gray-700">
            <li>Fill in your details</li>
            <li>Verify your identity</li>
            <li>Download your score</li>
        </ul>
        </div>
      </div>

      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 rounded-t-2xl">
        
        <div className='mt-0 flex justify-between p-4 font-bold  tracking-tight text-gray-500 dark:text-white bg-gradient-to-r from-white to-[#6FBF44] rounded-t-2xl'>
            <p className="text-gray-700">
                Best Value
            </p>
            <p className=''>60% Off</p>
        </div>
        <div className="px-10 flex flex-col justify-between w-100 mt-5">
            <div className='flex justify-between font-semibold text-gray-600'>
                <p className=''>Monthly Subscription</p>
                <p className="mb-3 font-normal text-gray-700 ">
                    ₹99
                </p>
            </div>
            <div>
                <ul className="list-disc  space-y-2 mt-5 font-semibold text-gray-700">
                    <li>Full access without limits</li>
                    <li>Fresh credit report every month</li>
                    <li>Monthly updates on report changes</li>
                </ul>

            </div>
            
        </div>
        <p className='p-4 text-sm'>₹99 + GST for the first month.</p>
        <div className="flex justify-center ">
            <Link to="/payment" className="rounded-b w-full font-semibold bg-green-500 text-center text-white p-4">Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default DownloadScore