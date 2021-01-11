import {connect} from 'react-redux'

const Users = ({users }) => {
    return <div>
        {users.map((item,key)=>{
            return (
                <div className="user">
                    {item.firstName}
                </div>
            )
        })}
    </div>

};

const mapStateToProps = state => ({
    users: state.user.users
});

export default connect(mapStateToProps, {})(Users)