import { formatRelativeDate } from "./js/helpers.js";
import store from "./js/Store.js";

const TabType = {
    KEYWORD: "KEYWORD",
    HISTORY: "HISTORY",
}

const TabLabel = {
    [TabType.KEYWORD]: "추천 검색어",
    [TabType.HISTORY]: "최근 검색어",
}

class App extends React.Component {
    constructor() {
        super(); // 생성 시점에 부모의 생성자 함수 호출

        this.state = {
            searchKeyword: "",
            searchResult: [],
            submitted: false,
            selectedTab: TabType.KEYWORD,
            keywordList: [],
            historyList: [],
        }
    }

    componentDidMount() {
        const keywordList = store.getKeywordList();
        const historyList = store.getHistoryList();
        this.setState({
            keywordList,
            historyList,
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                searchKeyword: "",
                searchResult: [],
                submitted: false,
            }
        })
    };

    handleChangeInput(event) {
        const searchKeyword = event.target.value;

        if (searchKeyword.length <= 0 && this.state.submitted) {
            return this.handleReset()
        }

        this.setState({ searchKeyword })
    };

    handleSubmit(event) {
        event.preventDefault();
        this.search(this.state.searchKeyword)
    }

    handleClearHistory(event, keyword) {
        event.stopPropagation();
        store.removeHistory(keyword);
        const historyList = store.getHistoryList();
        this.setState({
            historyList,
        })
    }

    search(searchKeyword) {
        const searchResult = store.search(searchKeyword)
        const historyList = store.getHistoryList()

        this.setState({
            searchResult,
            submitted: true,
            searchKeyword,
            historyList,
        })
    }

    render() {
        const searchForm = (
            <form
                onSubmit= { event => this.handleSubmit(event) }
                onReset = { () => this.handleReset() }
            >
                <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    autoFocus
                    value = { this.state.searchKeyword }
                    onChange = { event => this.handleChangeInput(event) }
                />
                { this.state.searchKeyword.length > 0 && (
                    <button type="reset" className="btn-reset"></button>
                )}
            </form>
        );

        const searchResult = (
            this.state.searchResult.length > 0 ? (
                <ul className="result">
                    {this.state.searchResult.map((item) => {
                        return (
                            <li key={item.id}>
                                <img src={item.imageUrl} alt={item.name}/>
                                <p>{item.name}</p>
                            </li>
                        )
                    })}
                </ul>
            ): (
                <div className="empty-box">검색 결과가 없습니다</div>
            )
        );

        const keywordList = (
            <ul className="list">
                {this.state.keywordList.map((item, idx) => (
                    <li
                        key={item.id}
                        onClick={() => this.search(item.keyword)}
                    >
                        <span className="number">{idx + 1}</span>
                        <span>{item.keyword}</span>
                    </li>
                ))}
            </ul>
        );

        const historyList = (
            <ul className="list">
                {this.state.historyList.map((item, idx) => (
                    <li
                        key={item.id}
                        onClick={() => this.search(item.keyword)}
                    >
                        <span className="number">{idx + 1}</span>
                        <span>{item.keyword}</span>
                        <span className="date">{formatRelativeDate(item.date)}</span>
                        <button
                            className="btn-remove"
                            onClick={event => this.handleClearHistory(event, item.keyword)}
                        >
                        </button>
                    </li>
                ))}
            </ul>
        )

        const tabs = (
            <>
                <ul className="tabs">
                    {Object.values(TabType).map(tabType => {
                        return (
                            <li
                                key = { tabType }
                                className = {this.state.selectedTab === tabType ? "active" : ""}
                                onClick = {() => this.setState({ selectedTab: tabType })}
                            >
                                { TabLabel[tabType] }
                            </li>
                        )
                    })}
                </ul>

                {this.state.selectedTab === TabType.KEYWORD && keywordList}
                {this.state.selectedTab === TabType.HISTORY && historyList}
            </>
        );

        return (
            <>
                <header>
                    <h2 className="container">검색</h2>
                </header>

                <div className="container">
                    { searchForm }

                    <div className="content">
                        {this.state.submitted ? searchResult : tabs}
                    </div>
                </div>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));