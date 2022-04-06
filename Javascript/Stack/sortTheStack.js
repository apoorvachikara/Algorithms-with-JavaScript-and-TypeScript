const sortStack = (stack) => {

    const temp = [];

    while (stack.length !== 1) {
        temp.push(stack.pop());
    }

    while (temp.length !== 0) {
        const pop = temp.pop();

        while(stack[stack.length -1] > pop) {
            temp.push(stack.pop());
        }
        stack.push(pop);
    }

    return stack;
 }

 const stack_1 = [3, 4, 5, 1, 2, 2, 2, 1, 3, 4, 5, 3, 1, 3, -1, 2, 3];
 const stack_2 = [-5, 2, -2, 4, 3, 1];

 console.log(sortStack(stack_1));
 console.log(sortStack(stack_2));