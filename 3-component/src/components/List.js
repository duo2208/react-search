import React from "react";

export default class List extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [],
        };
    };

    // 추상메서드
    renderItem(item, index) {
        throw "renderItem()"
    };

    render() {
        const { onClick } = this.props;
        const { data } = this.state;

        return (
            <ul className="list">
                {data.map((item, idx) => (
                    <li
                        key={item.id}
                        onClick={() => onClick(item.keyword)}
                    >
                        { this.renderItem(item, idx) }
                    </li>
                ))}
            </ul>
        )
    };
};