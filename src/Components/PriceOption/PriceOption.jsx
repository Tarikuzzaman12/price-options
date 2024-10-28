
import Features from "../Feature/Features";
const PriceOption = ({option}) => {
    const {name,features,price}= option
    
    return (
        <div className="bg-[#e0f7e0] p-5 rounded-lg flex flex-col" >
          <h2 className="text-center">
          <span className="text-7xl">{price}</span>
          <span className="text-3xl">/month</span>
          </h2>
          <h4 className="text-4xl text-center my-4">{name}</h4>
           <div className="pl-10 flex-grow">
           {
             features.map((feature,index) => <Features feature={feature} key={index}></Features>)
               }
           </div>
           <button className="mt-10 bg-purple-500 hover:bg-purple-600 w-full rounded-lg py-2 ">Buy Now </button>
        </div>
    );
};

export default PriceOption;