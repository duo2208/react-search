import { createNextId } from "./helpers.js";
import storage from "./storage.js";

const tag = "[Store]";

class Store {
  constructor(storage) {
    console.log(tag, "constructor");

    if (!storage) throw "no storage";

    this.storage = storage;
  }

  search(keyword) {
    // this.addHistory(keyword);

    return this.searchResult = this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
  }
}

const store = new Store(storage);
export default store;