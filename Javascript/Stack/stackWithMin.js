class StackWithMinimium {
    constructor() {
        this.stack = [];
        this.auxillaryStack = [];
    }

    push(value) {

        //logic goes here
        if (this.auxillaryStack.length === 0 || this.auxillaryStack[this.auxillaryStack.length - 1] > value) {
            this.auxillaryStack.push(value);
        }
        this.stack.push(value);
        return this;
        
    }

    pop() {

        if (this.isEmpty(this.stack)) return;
        const value = this.stack.pop();

        if ( this.auxillaryStack[this.auxillaryStack.length - 1]=== value) {
            this.auxillaryStack.pop();
        }
        return this;
    }

    getMin() {
        return this.auxillaryStack[this.auxillaryStack.length - 1];
    }


    get() {
        return this.stack[Symbol[iterator]]();
    }

    isEmpty(array) {
        return array.length;
    }
}


const stack = new StackWithMinimium();

stack.push(25).push(14).push(16).push(17).push(20);