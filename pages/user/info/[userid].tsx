import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {wrapper} from '../../../store'
import Main from "../../../app/layouts/Main";
import {setUserInfo} from "../../../redux/actions/userActions";

const UserInfo = ({userInfo}) => {
    return <Main>
        <div className="row">
            <div className="col-md-4 ">
                <div className="card">
                    <img  className="card-img-top img-fluid" src={userInfo.picture} />
                    <div className="card-body">
                        <div className="card-title">
                            <b>{userInfo.firstName} {userInfo.lastName}</b>
                        </div>
                        <div>
                            <div>Email: <b>{userInfo.email}</b></div>
                            <div>Gender: <b>{userInfo.gneder}</b></div>
                            <div>Register Date: <b>{userInfo.registerDate}</b></div>
                        </div>
                        <br/>
                        <div className="card-title">
                            <b>Location</b>
                        </div>
                        <div>
                            <div>Country: <b>{userInfo.location?.country}</b></div>
                            <div>State: <b>{userInfo.location?.state}</b></div>
                            <div>City: <b>{userInfo.location?.city}</b></div>
                            <div>Timezone: <b>{userInfo.location?.timezone}</b></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Main>

}

export const getServerSideProps = wrapper.getServerSideProps(
    async (context) => {
        //context.query.userid
        await context.store.dispatch(setUserInfo(context.query.userid))
        return {
            props: {}
        }

    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo: bindActionCreators(setUserInfo, dispatch),
    }
}
const mapStateToProps = state => ({
    userInfo: state.user.userInfo
})
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
