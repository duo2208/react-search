import React from "react";
import List from "./List";
import store from "../Store";
import { HistoryData } from "../types/StorageTypes";

interface HistoryListProps {
    onClick: (keyword: string) => void;
}

interface HistoryListState {
    historyList: HistoryData[];
}

export default class HistoryList extends React.Component<HistoryListProps, HistoryListState> {
    constructor(props: HistoryListProps) {
        super(props);

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

    handleClearHistory(keyword: string) {
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
