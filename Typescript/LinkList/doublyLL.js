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
        this.head = new NodeLL(value, previous, next);
        this.tail = this.head;
    }
    DoublyLL.prototype.insert = function (value) {
        if (value === void 0) { value = null; }
        var node = new NodeLL(value, null, this.head);
        this.head.previous = node;
        this.head = node;
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
            this.head.previous = newNode_1;
            return;
        }
        var newNode = new NodeLL(value, previous, current);
        previous.next = newNode;
    };
    DoublyLL.prototype.print = function () {
        var current = this.head;
        var arr = [];
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    };
    return DoublyLL;
}());
var dll = new DoublyLL(1);
dll.insert(2);
dll.insert(3);
dll.print();
dll.insertAtIndex(4, 0);
dll.print();
console.log(dll);
