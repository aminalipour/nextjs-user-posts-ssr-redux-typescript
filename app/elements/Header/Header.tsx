import {FormControl, Navbar} from "react-bootstrap";
import {useState} from "react";
import {connect} from 'react-redux'
import Link from "next/link";
import {bindActionCreators} from "redux";
import {setSearchKeyword} from "../../../redux/actions/mainActions";

function Header(props) {
    const [showSearchInput, setShowSearchInput] = useState(false)
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">{props.mainTitle}</Navbar.Brand>
            <div className="ml-auto">
                <div className="d-flex align-items-center">
                    <div className="mr-2">
                        <FormControl style={{
                            display: showSearchInput ? 'block' : 'none'
                        }} onChange={e => props.setSearchKeyword(e.target.value)} type="text" placeholder="Search"
                                     className="mr-sm-2"/>
                    </div>
                    <div>
                        {props.mainPage ? (
                            <i onClick={() => setShowSearchInput(!showSearchInput)} className="fas fa-search"/>
                        ) : (
                            <Link href={'/'}>
                                <i className="fas fa-arrow-right"/>
                            </Link>
                        )}
                    </div>
                </div>

            </div>
        </Navbar>
    );
}

const mapStateToProps = state => ({
    mainPage: state.main.mainPage,
    mainTitle: state.main.title
});
const mapDispatchToProps = (dispatch) => {
    return {
        setSearchKeyword: bindActionCreators(setSearchKeyword, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
