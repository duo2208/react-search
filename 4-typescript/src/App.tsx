import React from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import store from './Store';
import Tabs, { TabType } from "./components/Tabs";
import KeywordList from "./components/KeywordList";
import HistoryList from "./components/HistoryList";
import { ProductData } from "./types/StorageTypes";

interface AppState {
  searchKeyword: string;
  searchResult: ProductData[];
  submitted: boolean;
  selectedTab: TabType;
};

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
      selectedTab: TabType.KEYWORD,
    };
  };

  handleChangeInput(searchKeyword: string) {
    if (searchKeyword.length <= 0) {
      this.handleReset();
    }
    this.setState({
      searchKeyword,
    })
  };

  search(searchKeyword: string) {
    const searchResult = store.search(searchKeyword);
    this.setState({
      searchKeyword,
      searchResult,
      submitted: true,
    })
  };

  handleReset() {
    this.setState({
      searchKeyword: "",
      searchResult: [],
      submitted: false,
    })
  };

  render() {
    const { searchKeyword, searchResult, submitted, selectedTab } = this.state;

    return (
      <>
        <Header title="검색" />
        <div className="container">
          <SearchForm
            value={ searchKeyword }
            onChange={ (value) => this.handleChangeInput(value) }
            onSubmit={ () => this.search(searchKeyword) }
            onReset={ () => this.handleReset() }
          />

          <div className="content">
            { submitted ? (
             <SearchResult data={ searchResult }/>
            ) : (
              <>
                <Tabs
                  selectedTab={ selectedTab }
                  onChange={(selectedTab) => this.setState({ selectedTab })}
                />
                {selectedTab === TabType.KEYWORD && <KeywordList onClick={(keyword) => this.search(keyword)} />}
                {selectedTab === TabType.HISTORY && <HistoryList onClick={(keyword) => this.search(keyword)} />}
              </>
            )}
          </div>
        </div>
      </>
    )
  };
}