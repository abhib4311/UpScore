const CTAButton = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={!active}
      className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
        ${active ? "bg-green-500 text-white" : "bg-richblack-800"} 
        hover:bg-green-600 transition-all duration-200`}
    >
      {children}
    </button>
  );
};

export default CTAButton;
