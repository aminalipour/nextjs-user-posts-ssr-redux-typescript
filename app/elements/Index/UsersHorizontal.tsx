import {connect} from 'react-redux'
import styles from './Users.module.css'
import Carousel from 'react-multi-carousel';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: -1
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: -1
    },
    tablet: {
        breakpoint: {max: 464, min: 464},
        items: -1
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: -1
    }
};
const UsersHorizontal = ({users}) => {
    return <div className={styles['users-horizontal-list']}>
        <Carousel
            showDots={false}
            ssr={true}
            infinite={false}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            responsive={responsive}>
            {users.map((item, key) => {
                return (
                    <div key={key} className={styles['user-item-info']}>
                        <img className="img-fluid" src={item.picture} alt=""/>
                        <div className={styles['user-name']}>{item.firstName}</div>
                    </div>
                )
            })}
        </Carousel>
    </div>

};

const mapStateToProps = state => ({
    users: state.user.users
});

export default connect(mapStateToProps, {})(UsersHorizontal)