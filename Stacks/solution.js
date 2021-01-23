function Stack(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
}

Stack.prototype.push = function(value) {
    if(this._count < this._capacity) {
        this._storage[this._count++] = value;
        return this._count;
    }
    return `Максимальный размер уже достигнут. 
    Удалите элемент прежде чем добавлять новый`;
};

Stack.prototype.pop = function() {
    var value = this._storage[--this._count];
    delete this._storage[this.count];
    if(this._count < 0) {this._count = 0}
    return value;
};

Stack.prototype.peek = function() {
    return this._storage[this._count-1];
}

Stack.prototype.count = function() {
    return this._count;
}

//Test
var myStack = new Stack(3);
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'Max capacity error');
console.log(myStack.pop(), 'should be c');
console.log(myStack.count(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.count(), 'should be 2');

// ================ implement a min stack

function MinStack(capacity) {
    this._capacity = capacity;
    this._storage = {};
    this._count = 0;
    this._min = new Stack();
}

MinStack.prototype.push = function () {
    if(this._count < this._capacity) {
        if(this._min.peek() < value) {
            this._min.push(this._min.peek());
        } else {
            this._min.push(value);
        }
        this._storage[this._count++] = value;
        return this._count;
    }
    return 'Максимальный размер достигнут';
};

MinStack.prototype.pop = function () {
    this._min.pop();
    var value = this._storage[--this._count];
    delete this._storage[this._count];
    if(this._count < 0) {
        this._count = 0;
    }
    return value;
};

MinStack.prototype.peek = function() {
    return this._storage[this._count-1];
};

MinStack.prototype.count = function() {
    return this._count;
};

MinStack.prototype.min = function() {
    return this._min.peek();
}