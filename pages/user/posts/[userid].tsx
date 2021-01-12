import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {wrapper} from '../../../store'
import Main from "../../../app/layouts/Main";
import {setUserPosts} from "../../../redux/actions/userActions";
import Post from "../../../app/elements/Post/Post";

const UserPosts = ({posts}) => {

    return <Main>
        <br/>
        <div className="row">
            {posts.map((post, key) => {
                return <div key={key} className="col-md-4 col-sm-6 ">
                    <Post {...post} />
                </div>
            })}
        </div>
    </Main>

}

export const getServerSideProps = wrapper.getServerSideProps(
    async (context) => {
        //context.query.userid
        await context.store.dispatch(setUserPosts(context.query.userid))
        return {
            props: {}
        }

    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        setUserPosts: bindActionCreators(setUserPosts, dispatch),
    }
}
const mapStateToProps = state => ({
    posts: state.user.posts
})
export default connect(mapStateToProps, mapDispatchToProps)(UserPosts)
