import React from "react";
import List from "./List.js";
import store from "../Store.js";
import { formatRelativeDate } from "../helpers.js";

export default class HistoryList extends React.Component {
    constructor() {
        super();

        this.state = {
            historyList: [],
        }
    };

    componentDidMount() {
        this.fetch();
    };

    fetch() {
        const historyList = store.getHistoryList();
        this.setState({
            historyList,
        })
    }

    handleClearHistory(event, keyword) {
        event.stopPropagation();
        store.removeHistory(keyword);
        this.fetch();
    };

    render() {
        return (
            <List
                data={this.state.historyList}
                onClick={this.props.onClick}
                renderItem={(item, idx) => {
                    return(
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
                }}
            />
        )
    }
};
