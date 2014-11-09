/**
 * TabList
 */
var
component = require('omniscient');

var AlwaysRerender = {
    shouldComponentUpdate: function () {
        return true;
    }
};

module.exports = component('Panel', AlwaysRerender, function (props, statics) {


    return (
        <div>
            {this.props.children}
        </div>
    );
});
