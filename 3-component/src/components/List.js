import React from "react";
import { formatRelativeDate } from "../helpers.js";

const List = ({
    data = [],
    hasIdx = false,
    hasDate = false,
    onClick,
    onRemove,
    }) => {

    const handleClickRemove = (event, keyword) => {
        event.stopPropagation();
        onRemove(keyword);
    };

    return (
        <ul className="list">
            {data.map((item, idx) => (
                <li
                    key={item.id}
                    onClick={() => onClick(item.keyword)}
                >
                    {hasIdx && (
                        <span className="number">{idx + 1}</span>
                    )}
                    <span>{item.keyword}</span>
                    {hasDate && (
                        <span className="date">{formatRelativeDate(item.date)}</span>
                    )}
                    {!!onRemove && (
                        <button
                            className="btn-remove"
                            onClick={event => handleClickRemove(event, item.keyword)}
                        >
                        </button>
                    )}
                </li>
            ))}
        </ul>
    )
};

export default List;