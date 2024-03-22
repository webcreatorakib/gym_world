import PropTypes from 'prop-types';
import { IoMdCheckmark } from "react-icons/io";
const Features = ({feature}) => {
    return (
        <li className='flex items-center'><span className='me-3'><IoMdCheckmark /></span>{feature}</li>
    );
};
Features.propTypes = {
    feature: PropTypes.object
}
export default Features;