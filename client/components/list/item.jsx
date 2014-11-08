var
component = require('omniscient');

module.exports = component(function (props, statics) {

    var
    cursor = props.cursor;

    function deleteItem (e) {
        e.preventDefault();

        statics.events.emit('delete', cursor);
    }

    // console.log('item: ' + cursor.get('id'));

    return (
        <div key={cursor.get('id')}>
            <span>{cursor.get('title')}</span>
            <span>{cursor.get('text')}</span>
            <button onClick={deleteItem}>Delete</button>
        </div>
    );
});
