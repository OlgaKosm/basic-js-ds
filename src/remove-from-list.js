

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]

 class ListNode {
   constructor(x) {
     this.value = x;
     this.next = null;
   }
 }
**/




function removeKFromList(l, k) {

    let temporaryList = l;

    while (temporaryList.next !== null) {

        if (temporaryList.value === k) {
            l = temporaryList.next;
        } else if (temporaryList.next.value === k) {
            temporaryList.next = temporaryList.next.next;
            continue;
        }

        temporaryList = temporaryList.next;

    }

    return l;
}


module.exports = {
    removeKFromList
};