export class Item {
  constructor(
    public name: string,
    public content: string,
    public done: boolean,
  ) {
  }

  public toString() {
    return JSON.stringify(this)
  }

  public static fromJsonString(str: string) {
    let obj = JSON.parse(str)
    return new Item(obj.name, obj.content, obj.done)
  }
}

export function jsonStringArrayToItemArray(str: string[]) {
  return str.map((item) => Item.fromJsonString(item))
}
