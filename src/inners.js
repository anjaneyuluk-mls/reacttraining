function useState(initialValue) {
    let value = initialValue;
    let setValue = function(newValue) {
        // React does some work here
        //
        value = newValue
    }
    return [value, setValue];
}

function useEffect(callback) {
    const dom = {}; // thik of
    let cleanUp = null;
    dom.subscribe('onMount', function() {
        cleanUp = callback();
    })
    dom.subscribe('onUnMonut', function() {
        cleanUp();
    })
}