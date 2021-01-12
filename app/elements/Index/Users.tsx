import {connect} from 'react-redux'
import styles from './Users.module.css'
import Link from "next/link";

const Users = ({users,searchKeyword}) => {
    if (searchKeyword)
        users = users.filter(item=>{
            return item.firstName.search(searchKeyword) != -1 ||
                item.lastName.search(searchKeyword) != -1
        })
    return <div className={styles['users-vertical-list']}>
        {users.map((item, key) => {
            return (
                <Link
                    href={{
                        pathname: '/user/posts/[userid]',
                        query: {userid: item.id},
                    }}
                >
                    <div className={styles['user-item']}>
                        <div>
                            <img className='img-fluid' src={item.picture} alt=""/>
                        </div>
                        <div>
                            <div className={styles['name']}>{`${item.firstName} ${item.lastName}`}</div>
                            <div className="email">
                                {item.email}
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })}
    </div>

};

const mapStateToProps = state => ({
    users: state.user.users,
    searchKeyword: state.main.searchKeyword,
});

export default connect(mapStateToProps, {})(Users)
