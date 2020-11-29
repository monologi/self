import React from "react"
import Motologi from "../../static/images/motologi.png";

const Layout = (props) => {
    const { children } = props;
    return (
        <div className={`layout`} >
            <div className={`layout-head`}>
                <img style={{ height: 40 }} src={Motologi} alt="motologi logo" />
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