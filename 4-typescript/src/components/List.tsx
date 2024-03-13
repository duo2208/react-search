import React from "react";
import { formatRelativeDate } from "../helpers";
// import { List as ListItem } from "../types/ListType";
import { KeywordData, HistoryData } from "../types/StorageTypes";

interface ListProps {
    //data: ListItem[];
    data: (KeywordData | HistoryData)[];
    hasIdx?: boolean;
    hasDate?: boolean;
    onClick: (keyword: string) => void;
    onRemove?: (keyword: string) => void;
};

const List: React.FC<ListProps> = ({
    data = [],
    hasIdx = false,
    hasDate = false,
    onClick,
    onRemove,
    }) => {

    const handleClickRemove = (event: React.MouseEvent<HTMLButtonElement>, keyword: string) => {
        event.stopPropagation();
        if (onRemove) {
            onRemove(keyword);
        }
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
                    {hasDate && "date" in item && (
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