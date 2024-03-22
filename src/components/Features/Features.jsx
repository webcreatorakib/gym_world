import PropTypes from 'prop-types';
const Features = ({feature}) => {
    return (
        <li>{feature}</li>
    );
};
Features.propTypes = {
    feature: PropTypes.object
}
export default Features;