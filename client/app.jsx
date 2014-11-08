var
immstruct = require('immstruct'),

// UI components
List = require('./components/list/list.jsx'),
Panel = require('./components/panel.jsx').jsx;


var structure = immstruct({
    title: 'Add and delete posts.',
    items: [
        { id: 1, title: 'Post #1', text: 'Foo bar baz' },
        { id: 2, title: 'Post #2', text: 'Foo bar baz' },
        { id: 3, title: 'Post #3', text: 'Foo bar baz' },
        { id: 4, title: 'Post #4', text: 'Foo bar baz' }
    ]
});

function render () {
    React.render(<Panel><List.jsx cursor={structure.cursor('items')} /></Panel>, document.getElementById('boop'));

    React.render(<List.jsx cursor={structure.cursor('items')} />, document.getElementById('boop2'));
}

render();
structure.on('next-animation-frame', render);
