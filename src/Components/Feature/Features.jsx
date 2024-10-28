import { FaCheckCircle } from "react-icons/fa";

const Features = ({feature}) => { 
    return (
        <div className="flex items-center">
    <FaCheckCircle className="mr-2" />
    <p className="text-gray-800 font-medium">{feature}</p>
</div>

    );
};

export default Features;