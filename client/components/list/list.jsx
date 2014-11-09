var
EventEmitter = require("eventemitter3"),
component = require('omniscient');

component.debug()

var Item = require('./item.jsx');

var events = new EventEmitter();

var didMountMixin = {
    componentDidMount: function () {

        var self = this;
        // Will rerender, so remove all listeners.
        events.on('delete', function (item) {
            self.props.cursor.update(function (state) {
                // Use toVector() https://github.com/facebook/immutable-js/issues/122
                return state.remove(state.indexOf(item));
            });
        });
    }
};

module.exports = component(didMountMixin, function (props) {

    var cursor = props.cursor;


    var items = cursor.map(function (item, key) {

        var spread = {
            cursor: item,
            statics: {
                events: events
            },
            key: key
        };

        return <Item.jsx {...spread} />
    }).toArray();

    var show = function() {
        return items.length ? items : <span>No more items.</span>;
    };

    return (
        <div>
            { show() }
        </div>
    );

});
