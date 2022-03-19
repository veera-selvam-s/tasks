import React from "react";
import {Navbar,NavbarBrand} from "reactstrap";

const Header = (props) => {

    return (
        <div>
            <Navbar
                dark
                color="danger"
            >
                <NavbarBrand href="/">
                    <h2><i class="fa-solid fa-user-secret"></i>&nbsp;Veera Selvam</h2>
                </NavbarBrand>
            </Navbar>
        </div>
    );
}
export default Header