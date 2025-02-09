import { Link } from "react-router-dom";
// import DC01 from "../../../public/Icons/Section_Icons/DC01.png"
const Card = ({icon, heading, linkto, children}) => {
  return (
    <div className="h-50 w-90 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg on-hover:shadow-2xl"> 
        <div>
            <Link to={linkto} className="flex items-center gap-5">
                <img src={icon} className="w-12 h-12" />
                <h3 className="text-lg font-semibold text-richblack-500">{heading}</h3>
            </Link>
        </div>
        <div className="flex items-center justify-between mt-2">
            {children}
        </div>
    </div>
  );
};

export default Card;
