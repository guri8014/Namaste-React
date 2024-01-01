// const heading = React.createElement('h1',
//     { id: 'heading', xyz: 'ABC' },
//     'Hello this a react program');

// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(heading)
// root.render(heading);

const parent = React.createElement('div',
    { id: 'parent'},[
    React.createElement('div', {id: 'child'},
    [React.createElement('h1', {}, 'I am h1'),
     React.createElement('h2', {}, 'I am h2')]
    ),
    React.createElement('div', {id: 'child2'},
    [React.createElement('h1', {}, 'I am h1'),
     React.createElement('h2', {}, 'I am h2')]
    )
]
    );

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(parent)
root.render(parent);