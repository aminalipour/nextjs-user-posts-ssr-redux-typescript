import {Navbar} from "react-bootstrap";

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">All Users</Navbar.Brand>
            <div className="ml-auto">
                Search Icon
            </div>
        </Navbar>
    );
}