/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
    mass = [];


    push(element) {
        this.mass.push(element);
    }

    pop() {
        if (this.mass.length > 0) {
            return this.mass.pop();
        } else {
            return undefined;
        }
    }

    peek() {
        if (this.mass.length > 0) {
            return this.mass[this.mass.length - 1];
        } else {
            return undefined;
        }

    }
}

module.exports = {
    Stack
};
