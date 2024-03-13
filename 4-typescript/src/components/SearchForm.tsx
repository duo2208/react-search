import React from "react";

interface SearchFormProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
    onReset: () => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ value, onChange, onSubmit, onReset }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit();
    };
    const handleReset = () => {
        onReset();
    };
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
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