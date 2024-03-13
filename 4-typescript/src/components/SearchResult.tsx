import React from "react";
import { ProductData } from "../types/StorageTypes";

interface SearchResultProps {
    data: ProductData[],
};

const SearchResult: React.FC<SearchResultProps> = ({ data = [] }) => {
    if (data.length <= 0) {
        return <div className="empty-box">검색 결과가 없습니다</div>
    };

    return (
        <ul className="result">
            {data.map((item) => {
                return (
                    <li key={item.id}>
                        <img src={item.imageUrl} alt={item.name}/>
                        <p>{item.name}</p>
                    </li>
                )
            })}
        </ul>
    );
};

export default SearchResult;

// `serarchResult` 를 내부에서 가지고 있으면 외부에서는 이 상태에 접근할 수 없다.
// 따라서 검색 결과를 가진 App 컴포넌트가 자식 컴포넌트인 SearchResult 측으로 전달해 주는 구조가 맞겠다.
