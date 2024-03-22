import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "features": [
                "Access to cardio machines",
                "Limited access to weightlifting area",
                "Group fitness classes"
            ],
            "price": 29.99,
            "img": "https://i.ibb.co/CtRcK34/gym1.jpg"
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "features": [
                "Access to all facilities",
                "Unlimited group fitness classes",
                "Personal trainer session twice a month"
            ],
            "price": 49.99,
            "img": "https://i.ibb.co/QKBYRd5/gym2.jpg"
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "features": [
                "All features of Standard Plan",
                "Unlimited personal trainer sessions",
                "Access to premium amenities (sauna, steam room)",
                "Nutritional counseling"
            ],
            "price": 79.99,
            "img": "https://i.ibb.co/cbYy0gy/gym3.jpg"
        },
        {
            "id": 4,
            "name": "Family Plan",
            "features": [
                "Access for up to 4 family members",
                "Discounted rates for additional family members",
                "Access to all facilities",
                "Group fitness classes"
            ],
            "price": 99.99,
            "img": "https://i.ibb.co/ChFx3G6/gym4.jpg"
        },
        {
            "id": 5,
            "name": "Student Plan",
            "features": [
                "Valid student ID required",
                "Access to all facilities",
                "Discounted rate"
            ],
            "price": 24.99,
            "img": "https://i.ibb.co/XLtGsMz/gym5.jpg"
        },
        {
            "id": 6,
            "name": "Premium Plan",
            "features": [
                "Find Discount Coupon",
                "Access to all facilities",
                "Extra Facilities",
            ],
            "price": 100,
            "img": "https://i.ibb.co/FBF7J0n/gym6.jpg"
        }
    ]

    return (
        <div className="bg-[#ebf2fa]">
            <div className="container mx-auto px-5 md:py-10 lg:py-24 py-5">
                <div className="text-center py-5 mb-8">
                    <h2 className="text-4xl font-bold mb-5">Our Best Price Option</h2>
                    <p className="text-xl text-gray-600 md:w-6/12 mx-auto">Our Best Price Option provides access to a comprehensive range of amenities and services designed to elevate your fitness experience.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-20">
                    {
                        priceOptions.map(priceOption => <PriceOption key={priceOption.id} priceOption={priceOption}></PriceOption>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PriceOptions;