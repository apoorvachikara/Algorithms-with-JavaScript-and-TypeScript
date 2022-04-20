/**
 * O(n) - Time and Space O(d)- the auxillary array 
 * with only d smallest elements
 */
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

        if (this.isEmpty()) return this;
        const value = this.stack.pop();

        if (this.auxillaryStack[this.auxillaryStack.length - 1]=== value) {
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

    isEmpty() {
        return !this.stack.length;
    }
}


/**
 * We use element * dummyValue + minimumSOFar
 * 
 * O(n) - Time and O(1) Space
 */
class MinStack_Efficient {
    constructor() {
        this.stack = [];
        this.minumumSoFar = Number.MAX_VALUE;
        this.dummyValue = 9999;
        this.top = 0;
    }

    push(value) {
        if (this.minumumSoFar < value) this.minumumSoFar = value;
        const s = (value * this.dummyValue) + this.minumumSoFar;
        this.stack.push(s);
    }

    pop() {
        const element = this.stack.pop();
        const mininum = Math.floor(this.stack[this.stack.length - 1] % this.dummyValue);
        this.minumumSoFar = mininum;
    }

    getMin() {
        return this.minumumSoFar;
    }
}

const stack = new StackWithMinimium();
const stack_eff = new MinStack_Efficient();

stack.push(25).push(14).push(16).push(17).push(20).push(4);

stack_eff.push(3);
stack_eff.push(4);
stack_eff.push(2);
stack_eff.push(1);
 
console.log(stack_eff.getMin());
stack_eff.pop();
console.log(stack_eff.getMin());