let currentObserver = null;

export const observer = (selector: Function, cb: Function): void => {
  currentObserver = cb;
  selector();
  currentObserver = null;
};

class Store<IState> {
  protected state: IState;
  protected reducer: Record<string, Function>;
  protected middleware : Record<string, Function>;
  protected observers: Set<Function>;

  constructor(initState: IState) {
    this.state = initState;
    this.observers = new Set();
  }

  public dispatch({ type, data = null, error = null }): void {
    this.reducer[type]({ data, error });
    this.middleware[type]({data});
  }

  public getState(): IState {
    if (currentObserver) {
      this.observers.add(currentObserver);
    }
    return this.state;
  }

  protected setState(nextState: IState): void {
    this.state = nextState;
    this.observers.forEach((observer) => observer());
  }
}

export default Store;
