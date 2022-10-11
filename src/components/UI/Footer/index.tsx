import { FC } from "react";

import "./Footer.scss";

const Footer: FC = () => {
    return (
        <footer className={"footer"}>
            <div className={"footer__contacts"}></div>
            <div className={"footer__nav"}>
                <nav></nav>
            </div>
        </footer>
    );
};

export default Footer;
