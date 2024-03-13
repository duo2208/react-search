import React from "react";

interface HeaderProps {
    title: string;
};

const Header: React.FC<HeaderProps> = (props) => (
    <header>
        <h2 className="container">{ props.title }</h2>
    </header>
)

export default Header;