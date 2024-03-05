export function createPastDate(date = 1, now = new Date()) {
    if (date < 1) throw "date는 1 이상입니다";

    const yesterday = new Date(now.setDate(now.getDate() - 1));
    if (date === 1) return yesterday;

    return createPastDate(date - 1, yesterday);
  }

  export function createNextId(list = []) {
    return Math.max(...list.map((item) => item.id)) + 1;
}