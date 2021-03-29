import PropTypes from 'prop-types';
import styles from './Title.module.scss';

const Title = ({ className, children, ...restProps }) => {
    const stylesClasses = [className, styles.main].join(' ');
    return (
        <h2 className={stylesClasses} {...restProps}>
            {children}
        </h2>
    );
};

Title.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Title;
