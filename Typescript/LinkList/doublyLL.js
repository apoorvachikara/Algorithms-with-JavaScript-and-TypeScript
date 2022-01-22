var NodeLL = /** @class */ (function () {
    function NodeLL(value, previous, next) {
        if (value === void 0) { value = 0; }
        if (previous === void 0) { previous = null; }
        if (next === void 0) { next = null; }
        this.value = value;
        this.previous = previous;
        this.next = next;
    }
    return NodeLL;
}());
var DoublyLL = /** @class */ (function () {
    function DoublyLL(value, previous, next) {
        if (value === void 0) { value = null; }
        if (previous === void 0) { previous = null; }
        if (next === void 0) { next = null; }
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.head = new NodeLL(value, previous, next);
        this.tail = this.head;
        this.inceaseSize();
    }
    DoublyLL.prototype.insert = function (value) {
        if (value === void 0) { value = null; }
        var node = new NodeLL(value, null, this.head);
        this.head.previous = node;
        this.head = node;
        this.inceaseSize();
        return this;
    };
    DoublyLL.prototype.insertAtIndex = function (value, index) {
        var current = this.head;
        var previous = null;
        var count = 0;
        while (current && index !== count) {
            previous = current;
            current = current.next;
            count += 1;
        }
        if (!previous) {
            var newNode_1 = new NodeLL(value, null, this.head);
            this.head = newNode_1;
            return this;
        }
        var newNode = new NodeLL(value, previous, current);
        previous.next = newNode;
        this.inceaseSize();
        return this;
    };
    DoublyLL.prototype.remove = function (option) {
        if (option === void 0) { option = { index: null, position: 'start' }; }
        // remove from last 
        // we can use tail
        if (option.index !== null && option.index >= 0) {
            var current = this.head;
            var count = 0;
            while (current && count !== option.index) {
                current = current.next;
            }
            var previous = current.previous;
            previous.next = current.next;
            return this;
        }
        if (option.position === 'last') {
            var previous = this.tail.previous;
            previous.next = null;
            this.tail = previous;
        }
        else {
            var node = this.head.next;
            this.head = node;
        }
        return this;
    };
    DoublyLL.prototype.print = function () {
        var current = this.head;
        var arr = [];
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
        return this;
    };
    DoublyLL.prototype.inceaseSize = function () {
        this.size += 1;
    };
    return DoublyLL;
}());
var dll = new DoublyLL(1);
dll.insert(2).insert(3).print().insertAtIndex(4, 0)
    .insertAtIndex(77, 2).print().remove().print()
    .remove({ index: 1, position: 'last' }).print();
// console.log(dll.length);
// console.log(dll);
