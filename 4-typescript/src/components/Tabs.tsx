import React from "react";

export enum TabType {
    KEYWORD = "KEYWORD",
    HISTORY = "HISTORY",
};

const TabLabel = {
    [TabType.KEYWORD]: "추천 검색어",
    [TabType.HISTORY]: "최근 검색어",
};

interface TabsProps {
    selectedTab: string;
    onChange: (tabType: TabType) => void;
};

const Tabs: React.FC<TabsProps> = ({ selectedTab, onChange }) => (
    <ul className="tabs">
        {Object.values(TabType).map(tabType => {
            return (
                <li
                    key = { tabType }
                    className = {selectedTab === tabType ? "active" : ""}
                    onClick = {() => onChange(tabType)}
                >
                    { TabLabel[tabType] }
                </li>
            )
        })}
    </ul>
);

export default Tabs;