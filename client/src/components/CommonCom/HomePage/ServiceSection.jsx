import React from 'react'
import Button from '../../CommonCom/Button'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const isLoggedIn = false; // Replace with actual auth check
  const navigate = useNavigate();
  const handleButtonClick = () =>{
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {  
      navigate("/login");
    }
  }
  return (
      <div className="flex flex-col items-center justify-center mx-auto max-w-screen-xl mt-20 ">
        <h1 className="text-5xl font-bold text-gray-900">
            Our Debt Relief Services!
        </h1>
        <p className="text-lg text-center text-gray-600 w-200 mt-5">
            Struggling with debt? You're not alone. We understand the stress and anxiety it brings. Let us help you regain control with expert guidance, legal support, and affordable repayment solutions. A debt-free future starts today! 💚
        </p>


        <div className='flex flex-row   mt-10 bg-gray-200 p-10 rounded-2xl mb-10'>
            <div className='flex flex-col justify-between items-start w-1/2'>
                <div>
                    <h1 className='text-3xl font-semibold text-gray-900 mb-10'>Sort term loans for credit building</h1>
                    <p className='text-lg text-justify text-gray-600'>A debt trap is a cycle of borrowing where repayment becomes difficult due to high interest and poor financial planning. Breaking free requires budgeting, cutting expenses, and smart repayment strategies.</p>
                </div>
                <Button active={true} onClick={handleButtonClick} className="flex flex-row items-center gap-3">
                    <div className="flex items-center gap-3 cursor-pointer">
                        Know more 
                        <FaArrowRight />
                    </div>
                    </Button>
            </div>
            <div>
                <img src="./Images/loan1.png" alt="image" />
            </div>
        </div>
      </div>
  )
}

export default ServicesSection
