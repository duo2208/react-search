import React from "react";
import List from "./List.js";
import store from "../Store.js";
import { formatRelativeDate } from "../helpers.js";

export class HistoryList extends List {
    componentDidMount() {
        this.fetch();
    };

    fetch() {
        const data = store.getHistoryList();
        this.setState({
            data,
        })
    }

    handleClearHistory(event, keyword) {
        event.stopPropagation();
        store.removeHistory(keyword);
        this.fetch();
    };

    renderItem(item, idx) {
        return (
            <>
                <span className="number">{idx + 1}</span>
                <span>{item.keyword}</span>
                <span className="date">{formatRelativeDate(item.date)}</span>
                <button
                    className="btn-remove"
                    onClick={event => this.handleClearHistory(event, item.keyword)}
                >
                </button>
            </>
        )
    };
};

export default HistoryList;