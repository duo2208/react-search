import { createNextId } from "./helpers";
import storage from "./storage";
import { KeywordData, HistoryData, ProductData } from "./types/StorageTypes";

const tag = "[Store]";

class Store {
  private storage: {
    keywordData: KeywordData[];
    historyData: HistoryData[];
    productData: ProductData[];
  }

  constructor(storage: {
    keywordData: KeywordData[];
    historyData: HistoryData[];
    productData: ProductData[];
  }) {
    console.log(tag, "constructor");

    if (!storage) throw "no storage";

    this.storage = storage;
  };

  search(keyword: string): ProductData[] {
    this.addHistory(keyword);

    return this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
  };

  getKeywordList(): KeywordData[] {
    return this.storage.keywordData;
  };

  getHistoryList(): HistoryData[] {
    return this.storage.historyData.sort(this._sortHistory);
  };

  _sortHistory(history1: HistoryData, history2: HistoryData) {
    return history2.date.getTime() - history1.date.getTime();
  };

  addHistory(keyword: string): void {
    keyword = keyword.trim();
    if (!keyword) return;

    const hasHistory = this.storage.historyData.some(
      (history) => history.keyword === keyword
    )
    if (hasHistory) {
      this.removeHistory(keyword);
    }

    const id = createNextId();
    const date = new Date();
    this.storage.historyData.push({ id, keyword, date });
    this.storage.historyData = this.storage.historyData.sort(this._sortHistory);
  };

  removeHistory(keyword: string): void {
    this.storage.historyData = this.storage.historyData.filter(
      (history) => history.keyword !== keyword
    );
  };
}

const store = new Store(storage);
export default store;