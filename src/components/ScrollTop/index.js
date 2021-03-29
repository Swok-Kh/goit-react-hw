import { ReactComponent as UpIcon } from '../../images/arrow-up.svg';
import styles from './ScrollTop.module.scss';

const ScrollTop = ({ className, ...restProps }) => {
    const stylesClasses = [className, styles.button].join(' ');
    return (
        <>
            <button
                className={stylesClasses}
                type="button"
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                name="scroll top"
                {...restProps}
            >
                <UpIcon />
            </button>
        </>
    );
};

export default ScrollTop;
