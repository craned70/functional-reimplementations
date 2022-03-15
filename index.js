var _ = {};

    /*********IDENTITY**********/
    _.identity = function (val) {
        console.log(val);
    };

/*********FIRST**********/
_.first = function (array, n) {
    if (n) {
        for (let i = 0; i < n; i++) {
            console.log(array[i]);
        };
    } else {
        console.log(array[0]);
    };
};

/*********LAST**********/
_.last = function (array, n) {
    if (n) {
        for (let i = array.length - 1; i > array.length - (n + 1); i--) {
            console.log(array[i])
        }
    } else {
        console.log(array[array.length - 1]);
    }
};

/*********EACH**********/
_.each = function (list, iteratee, context) {
    if (context) {
        iteratee.bind(context);
    };

    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            iteratee(list[i], i, list);
        }
    } else if (typeof (list) === 'object' && !Array.isArray(list)) {
        for (const [key, value] of Object.entries(list)) {
            iteratee(value, key, list);
        };
    };

    return list;
};

/*********INDEXOF**********/
_.indexOf = function (array, target) {
    function binarySearch(arr, tar) {
        let low = 0;
        let high = array.length - 1;
        let mid;
        while (high >= low) {
            mid = 1 + Math.floor((high - 1) / 2);

            if (arr[mid] === tar) {
                return mid;
            } else if (arr[mid] > tar) {
                high = mid - 1;
            } else {
                low = mid + 1;
            };
        };

        return -1;
    };

    binarySearch(array, target);
};

/*********FILTER**********/
_.filter = function (collection, test) { };

/*********REJECT**********/
_.reject = function (collection, test) { };

/*********UNIQ**********/
_.uniq = function (array) { };

/*********MAP**********/
_.map = function (collection, iterator) { };

/*********PLUCK**********/
_.pluck = function (collection, key) { };

/*********INVOKE*********/
_.invoke = function (collection, func, args) { };

/*********REDUCE**********/
_.reduce = function (collection, iterator, accum) { };

/*********CONTAINS*********/
_.contains = function (collection, target) { };

/*********EVERY**********/
_.every = function (collection, iterator) { };

/********SOME**********/
_.some = function (collection, iterator) { };

/*********EXTEND**********/
_.extend = function (obj) { };

/*********DEFAULTS**********/
_.defaults = function (obj) { };

/*********ONCE**********/
_.once = function (func) { };

/*********MEMOIZE*************/
_.memoize = function (func) { };

/*********DELAY*********/
_.delay = function (func, wait) { };

/*********SHUFFLE**********/
_.shuffle = function (array) { };

/*********SORTBY**********/
_.sortBy = function (collection, iterator) { };

/*********ALTERNATE SORTBY USING MANUAL SORT**********/
_.sortByManual = function (collection, iterator) { };

/*********ZIP**********/
_.zip = function () { };

/*********FLATTEN**********/
_.flatten = function (nestedArray) { };

/*********UNION**********/
_.union = function () { };

/*********INTERSECTION**********/
_.intersection = function () { };

/*********DIFFERENCE**********/
_.difference = function (array) { };