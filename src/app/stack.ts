export class Stack {
  private readonly items: Array<number>;
  private topIndex: number;
  private readonly size: number;

  constructor(size: number) {
    this.size = size;
    this.items = new Array<number>(size);
    this.topIndex = -1;
    console.log('Created stack of size ' + size);
  }

  private full() {
    return this.topIndex + 1 >= this.size;
  }

  private empty() {
    return this.topIndex < 0;
  }

  private top() {
    return this.items[ this.topIndex ]
  }

  public _full_message = 'Stack full!';
  public _empty_message = 'Stack empty!';

  /**
   * push -
   */
  public push(item: number) {
    if (!this.full()) {
      this.items[ ++this.topIndex ] = item;
    } else {
      console.log(this._full_message);
      throw new Error(this._full_message);
    }
  }

  public pop() {
    if (!this.empty()) {
      let top = this.top();
      this.items.splice(this.topIndex--, 1);
      return top;
    } else {
      console.log(this._empty_message);
      throw new Error(this._empty_message);
    }

  }

  public peek() {
    if (!this.empty()) {
      return this.top();
    } else {
      console.log(this._empty_message);
      throw new Error(this._empty_message);
    }
  }

}
