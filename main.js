function customIterator(start = 0, max = 10, step = 1){
    let current = start;
    return {
     next: function(){
        if(current <= max){
            current += step;
            return {
                done: false,
                value: current,
            }
        }
        else{
            return {
                done: true,
                value: current,
            }
        }
    }
}}



function* customGenerator(start = 0, max = 10, step = 1){
    for(start; start < max; start + step){
        yield start;
    }
}

