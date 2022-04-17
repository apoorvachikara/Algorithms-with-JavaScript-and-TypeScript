class StackWithMinimium {
    constructor() {
        this.stack = [];
        this.auxillaryStack = [];
    }

    push(...values) {

        //logic goes here
        const isGreater = this.stack[this.stack.length - 1] > this.auxillaryStack[this.auxillaryStack.length] - 1;
        if (isGreater) {
            this.auxillaryStack(...values);
        } else {
            this.stack(...values);
        }
        
        
    }

    pop() {
        this.auxillaryStack.pop();
        return this.stack.pop();
    }

    getMin() {

    }


    get() {
        return this.stack[Symbol[iterator]]();
    }
}