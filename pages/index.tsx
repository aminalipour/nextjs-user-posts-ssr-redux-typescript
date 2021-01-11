import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {wrapper} from '../store'
import {fetchUsers} from "../redux/actions/userActions";
import Main from "../app/layouts/Main";
import Users from "../app/elements/Index/Users";
import UsersHorizontal from "../app/elements/Index/UsersHorizontal";

const Index = ({user}) => {
    return <Main>
        <UsersHorizontal/>
        <Users/>
    </Main>

}

export const getServerSideProps = wrapper.getServerSideProps(
    async ({store}) => {
        await store.dispatch(fetchUsers())
        return {
            props: {}
        }

    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        testAction: bindActionCreators(fetchUsers, dispatch),
    }
}
export default connect(null, mapDispatchToProps)(Index)
