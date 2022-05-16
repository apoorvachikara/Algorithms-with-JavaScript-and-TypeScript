class Processor {
    constructor(opt) {
        Object.assign(this.opts, opt);
    }
    requestsQueue = [];
    queue = [];
    opts = {
        len: 0
    }
    execute(request) {
       if (this.requestsQueue.length <= this.opts.len) {
           this.requestsQueue.push(request);
           return this.requestProcess();
       } else {
           // add request to queue.
           this.queue.shift(request);
       }
    }
   
    async requestProcess() {
        while(this.requestsQueue.length) {
            debugger
            const request = this.requestsQueue.pop();
            const response = await request();
            return response;
        }
        this.fetchMoreRequestFromQueue();
    }
   
    async fetchMoreRequestFromQueue() {
       let count = 0;
       while(this.opts.len < count) {
           this.requestsQueue.push(this.queue.pop());
           count++;
       }
    }
   }

const requests = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`Request ${Math.random().toFixed()}`)
        }, Math.random() * 1000)
    })
}


console.log(Object.prototype.toString.call([])) // [object Array]

console.log(Object.prototype.toString.call(() => {"by Apoorva Chikara"})) // [object Function]

console.log(Object.prototype.toString.call(10)) // [object Number]