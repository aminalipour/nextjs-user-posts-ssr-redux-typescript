import {FormControl, Navbar} from "react-bootstrap";
import {useState} from "react";
import {connect} from 'react-redux'
import Link from "next/link";

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
                        }} type="text" placeholder="Search" className="mr-sm-2"/>
                    </div>
                    <div>
                        {props.mainPage ? (
                            <i onClick={() => setShowSearchInput(!showSearchInput)} className="fas fa-search"/>
                        ) : (
                            <Link href={'/'}>
                                <i className="fas fa-arrow-left"/>
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

export default connect(mapStateToProps, {})(Header)
