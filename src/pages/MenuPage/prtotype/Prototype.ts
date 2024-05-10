class Prototype<T> {
    private clonable: T;

    public constructor(clonable: T) {
        this.clonable = clonable;
    }

    public getClone(): T {
        let clone: T = {} as T;
        for (const key in this.clonable)
            clone[key] = this.clonable[key];

        return clone;
    }
}

export default Prototype;