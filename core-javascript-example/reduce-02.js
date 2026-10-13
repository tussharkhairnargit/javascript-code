/**
 * 'list'must contain relational data
 */

const data = {
    list : [
        { name: 'John', age: 25, state: 'CA' },
        { name: 'Jane', age: 30, state: 'NY' },
        { name: 'Jim', age: 35, state: 'TX' },
        { name: 'Jill', age: 28, state: 'CA' },
    ]
};

const result = data.list.reduce((acc, curr) => {                                                                        
    if (!acc[curr.state]) {
        acc[curr.state] = [];
    }
    acc[curr.state].push(curr);
    return acc;
}, {});

console.log(result);

