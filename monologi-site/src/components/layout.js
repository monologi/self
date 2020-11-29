import React from "react"
import Motologi from "../../static/images/motologi.svg";

const Layout = (props) => {
    const { children } = props;
    return (
        <div className={`layout`} >
            <div className={`layout-head`}>
                <img src={Motologi} alt="motologi logo" />
                <div className={`layout-contact-us`} >
                    <a href="mailto:motologi:motologi@gmail.com">Contact Us</a>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout