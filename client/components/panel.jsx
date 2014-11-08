/**
 * TabList
 */
var
component = require('omniscient');

module.exports = component('Panel', function (props, statics) {

    return (
        <div>
            {this.props.children}
        </div>
    );
});
