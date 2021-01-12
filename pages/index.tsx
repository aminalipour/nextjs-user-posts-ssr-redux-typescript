import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {wrapper} from '../store'
import {fetchUsers} from "../redux/actions/userActions";
import Main from "../app/layouts/Main";
import Users from "../app/elements/Index/Users";
import UsersHorizontal from "../app/elements/Index/UsersHorizontal";
import {useEffect} from "react";
import {setMainPage, setMainTitle} from "../redux/actions/mainActions";

const Index = (props) => {
    useEffect(() => {
        props.setMainPage(false)
        props.setMainTitle('All Users')
    });
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
        setMainPage: bindActionCreators(setMainPage, dispatch),
        setMainTitle: bindActionCreators(setMainTitle, dispatch),
    }
}
export default connect(null, mapDispatchToProps)(Index)
