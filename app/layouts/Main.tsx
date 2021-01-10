import {ComponentProps} from "react";
import Header from "../elements/Header/Header";


export default function Main(props: ComponentProps<any>) {
    return (
        <div>
            <Header/>
            <div className="container-fluid">
                {props.children}
            </div>
        </div>
    );
}