import Features from "../Feature/Features";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
  const priceOptions=  [
        {
            "id": 1,
            "name": "Basic Fit",
            "price": 29.99,
            "features": [
                "Access to all gym equipment",
                "1 group class per week",
                "Locker access",
                "Basic support from trainers",
                "Access to cardio and strength training zones",
                "Free fitness assessment once per year",
                "Discounts on selected supplements"
            ]
        },
        {
            "id": 2,
            "name": "Pro Fit",
            "price": 49.99,
            "features": [
                "Access to all gym equipment",
                "Unlimited group classes",
                "Locker access",
                "2 personal training sessions per month",
                "Premium support from trainers",
                "Access to cardio, strength, and HIIT zones",
                "Monthly fitness progress report",
                "10% discount on supplements and gym ",
                "Access to weekend boot camps"
            ]
        },
        {
            "id": 3,
            "name": "Elite Fit",
            "price": 69.99,
            "features": [
                "Access to all gym equipment",
                "Unlimited group classes",
                "Locker and sauna access",
                "4 personal training sessions per month",
                "Customized fitness plan",
                "Priority support from trainers",
                "Access to cardio, strength, HIIT, and ",
                "Weekly fitness progress report",
                "15% discount on supplements and gym ",
                "Access to exclusive workshops and events",
                "Priority booking for popular group classes"
            ]
        },
        {
            "id": 4,
            "name": "Family Fit",
            "price": 89.99,
            "features": [
                "Access to all gym equipment for up ",
                "Unlimited group classes",
                "Locker and sauna access",
                "2 personal training sessions per m",
                "Group fitness plan for families",
                "Dedicated family support from trainers",
                "Access to family-friendly workout zones",
                "Monthly family fitness check-ins",
                "10% discount on supplements and gym ",
                "Childcare services during workout sessions",
                "Access to family wellness seminars"
            ]
        },
        {
            "id": 5,
            "name": "Premium Fit",
            "price": 99.99,
            "features": [
                "Access to all gym equipment",
                "Private locker and VIP lounge access",
                "Unlimited group classes",
                "8 personal training sessions per month",
                "Personalized nutrition plan",
                "24/7 support from elite trainers",
                "Access to exclusive wellness workshops",
                "Access to cardio, strength, HIIT, functional",
                "Weekly fitness and nutrition progress reports",
                "20% discount on supplements and gym ",
                "Priority registration for all events and ",
                "Complimentary wellness kit upon joining",
                "Access to premium spa services at "
            ]
        }
    ]
    
    return ( 
        <div className="m-12">
             <h2 className="text-5xl">Best prices of the town</h2>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
         
             {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
             }
             
          </div>

        </div>
    );
};

export default PriceOptions;