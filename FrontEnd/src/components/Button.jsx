import { Link } from "react-router-dom";

export default function Button({label, onClick , to}){
    return <div className="pt-2">
        <Link to={to}><button onClick={onClick} className="sm:w-80 w-60 py-2 mt-2 bg-blue-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 text-white hover:bg-blue-700  ">{label}</button></Link>
        </div>
}