import {connect} from 'react-redux'
import styles from './Users.module.css'
import Carousel from 'react-multi-carousel';
import Link from "next/link";

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
const UsersHorizontal = ({users,searchKeyword}) => {
    if (searchKeyword)
        users = users.filter(item=>{
            return item.firstName.search(searchKeyword) != -1 ||
                item.lastName.search(searchKeyword) != -1
        })
    return <div className={styles['users-horizontal-list']}>
        <Carousel
            showDots={false}
            ssr={true}
            infinite={false}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            responsive={responsive}>
            {users.map((item, key) => {
                return (
                    <Link
                        href={{
                            pathname: '/user/info/[userid]',
                            query: {userid: item.id},
                        }}
                    >
                        <div key={key} className={styles['user-item-info']}>
                            <img className="img-fluid" src={item.picture} alt=""/>
                            <div className={styles['user-name']}>{item.firstName}</div>
                        </div>
                    </Link>
                )
            })}
        </Carousel>
    </div>

};

const mapStateToProps = state => ({
    users: state.user.users,
    searchKeyword: state.main.searchKeyword,

});

export default connect(mapStateToProps, {})(UsersHorizontal)
