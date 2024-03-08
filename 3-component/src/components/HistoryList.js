import React from "react";
import List from "./List.js";
import store from "../Store.js";

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

    handleClearHistory(keyword) {
        store.removeHistory(keyword);
        this.fetch();
    };

    render() {
        return (
            <List
                hasDate={true}
                data={this.state.historyList}
                onClick={this.props.onClick}
                onRemove={(keyword) => this.handleClearHistory(keyword)}
            />
        )
    }
};
