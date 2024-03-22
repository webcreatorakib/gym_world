import PropTypes from 'prop-types';
import Features from '../Features/Features';
const PriceOption = ({ priceOption }) => {
    const { name, img, features, price } = priceOption;
    console.log(name)
    return (
        <div className="card flex flex-col mx-auto w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <h3 className='text-xl font-bold'>Price: <span className='text-[#7678ed] '>{price} $</span></h3>
                <h3 className='text-xl font-bold'>Features</h3>
                <ul className='flex-grow'>
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
                </ul>
                <button className='btn mt-5 bg-[#8ac926] font-bold'>Buy Now</button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    priceOption: PropTypes.object
}
export default PriceOption;