import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <div>
            <li className='md:text-black px-5 pb-5 pt-5 text-white font-bold md:p-3'><a href={`${route.path}`}>{route.name}</a></li>
        </div>
    );
};
Link.propTypes = {
    route: PropTypes.object
}
export default Link;