class ListNodeConverter {
    constructor(array) {
        this.array = array;
    }

    convertToLinkedList() {
        return this.array.reduceRight((next, value) => ({ value, next }), null);
    }

}

module.exports = {
    ListNodeConverter,
}