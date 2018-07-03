function Node(value) {
    this.value = value;
    this.next = function (next) {
        if (arguments.length > 0) {
            this.next = next;
            return this.next;
        }
        else {
            return null;
        }
    }
}


