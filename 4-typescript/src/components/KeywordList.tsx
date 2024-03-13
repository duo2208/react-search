import React from "react";
import List from "./List";
import store from "../Store";
import { KeywordData } from "../types/StorageTypes";

interface KeywordListProps {
    onClick: (keyword: string) => void;
}

interface KeywordListState {
    keywordList: KeywordData[];
}

export default class KeywordList extends React.Component<KeywordListProps, KeywordListState> {
    constructor(props: KeywordListProps) {
        super(props);

        this.state = {
            keywordList: [],
        }
    };

    componentDidMount() {
        const keywordList = store.getKeywordList();
        this.setState({
            keywordList,
        });
    };

    render() {
        return (
            <List
                hasIdx={true}
                data={this.state.keywordList}
                onClick={this.props.onClick}
            />
        )
    };
};