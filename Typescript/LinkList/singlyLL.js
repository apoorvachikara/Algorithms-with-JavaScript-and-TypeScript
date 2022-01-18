/**
 * Node class
 */
var LinkNode = /** @class */ (function () {
    /**
     * @param {number| string} value
     * @param {Node} next
     */
    function LinkNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return LinkNode;
}());
var LinkList = /** @class */ (function () {
    /**
    *
    * @param {number| string} value
    */
    function LinkList(value) {
        this.head = new LinkNode(value);
    }
    LinkList.prototype.insertNode = function (value) {
        this.head = new LinkNode(value, this.head);
    };
    LinkList.prototype.print = function () {
        var current = this.head;
        var result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result);
    };
    LinkList.prototype.insertAtPosition = function (value, index) {
        if (index < 0)
            return "Invalid Index to add";
        var count = 0;
        var current = this.head;
        var previous = null;
        while (current && count !== index) {
            console.log(count, index);
            previous = current;
            current = current.next;
            count += 1;
        }
        console.log("*************");
        console.log(previous);
        console.log("*************");
        var newNode = new LinkNode(value, current);
        if (previous)
            return previous.next = newNode;
        this.head = newNode;
    };
    LinkList.prototype.remove = function (index) {
        var current = this.head;
        var count = 0;
        while (current && count !== index) {
            count += 1;
            current = current.next;
        }
        console.log('***==remove');
        console.log(current);
        console.log('**remove***');
        current = current.next.next;
        console.log('***==remove  1111');
        console.log(current);
        console.log('**remove***');
    };
    return LinkList;
}());
var l1 = new LinkList(3);
for (var i = 3; i < 10; i++) {
    l1.insertNode(i);
}
l1.print();
l1.insertAtPosition('hello', 1);
l1.print();
l1.remove(1);
l1.print();
