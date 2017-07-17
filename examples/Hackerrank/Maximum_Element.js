function processData(input) {
    //Enter your code here

    // define the stack
    var stack = [];
    
    var commands = [];
    
    var input = input.split('\n');
    
    // load the commands
    for(let i = 1; i < input.length; i++) {
        if(input[i].includes(' ')) {
            commands.push({
                type: input[i].split(' ')[0],
                data: input[i].split(' ')[1]
            });
        } else {
            commands.push({
                type: input[i]
            });
        }
        
    }

    // process the commands
    for(let i = 0; i < commands.length; i++) {
        if(commands[i].type == 1) {
           pushToStack(commands[i].data);
        } else if (commands[i].type == 2) {
            popFromStack();
        } else if (commands[i].type == 3) {
            console.log(getMax())
        }
    }
    
    // helper functions
    function pushToStack(item) {
        stack.push(Number.parseInt(item));
    }
    
    function popFromStack() {
        stack.pop();
    }
    
    function isStackEmpty() {
        return stack.length === 0;
    }
    
    function getMax() {
        var max = stack[0];
        
        stack.map(function(item) {
            if(item > max) max = item;
        })
        
        return max;
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
