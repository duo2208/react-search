import React from "react";

const SearchForm = ({ value, onChange, onSubmit, onReset }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    };
    const handleReset = () => {
        onReset();
    };
    const handleChangeInput = (event) => {
        const searchKeyword = event.target.value;
        onChange(searchKeyword);
    };

    return (
        <form onSubmit={ handleSubmit } onReset={ handleReset }>
            <input
                type="text"
                placeholder="검색어를 입력하세요"
                autoFocus
                value = { value }
                onChange = { handleChangeInput }
            />
            { value.length > 0 &&
                <button
                    type="reset"
                    className="btn-reset"
                >
                </button>
            }
        </form>
    )
};

export default SearchForm;

// `searchKeyword` 는 여러 컴포넌트에서 의존하므로, 공통 조상 state로 끌어올린다.
// 끌어 올리면서 SearchForm 자체에서는 state를 쓰지 않게 되므로, 클래스 구조가 아닌 함수 구조를 사용하도록 변경한다.

/*
export default class SearchForm extends React.Component {
    constructor() {
        super();
    };

    handleChangeInput(event) {
        const searchKeyword = event.target.value;

        if (searchKeyword.length <= 0) {
            this.handleReset();
        }

        this.setState({ searchKeyword });
    };

    render() {
        return (
            <form
                onSubmit={ event => this.handleSubmit(event) }
                onReset={ () => this.handleReset() }
            >
                <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    autoFocus
                    value = { this.state.searchKeyword }
                    onChange = { event => this.handleChangeInput(event) }
                />
                { this.state.searchKeyword.length > 0 && (
                    <button
                        type="reset"
                        className="btn-reset"
                    >
                    </button>
                )}
            </form>
        )
    };
};
*/