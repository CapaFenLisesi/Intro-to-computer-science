function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    var max = -100;
    
    for(let i = 0; i < 4; i++) {
        
        for(let j = 0; j < 4; j++) {
            
            let hg = sumArray(getHourglass(j, i));
        
            if(hg > max ) {
                max = hg;
            }
        }

    }
    
    console.log(max);
    
    // helper functions
    function getHourglass(x, y) {
        var values = [];
        
        values.push(arr[x][y]);
        values.push(arr[x][y + 1]);
        values.push(arr[x][y + 2]);
        
        values.push(arr[x + 1][y + 1]);
        
        values.push(arr[x + 2][y]);
        values.push(arr[x + 2][y + 1]);
        values.push(arr[x + 2][y + 2]);
        
        return values;
    }
    
    function sumArray(array) {
        return array.reduce(function(sum, value) {
          return sum + value;
        }, 0);
    }
    
}
