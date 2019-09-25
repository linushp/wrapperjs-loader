module.exports = function (source) {
    var context = this;
    var query = context.query || '';
    query = query.replace(/^\?/, '');

    var queries = query.split("&");
    var args = queries[0] || '';
    var returns = queries[1] || '{}';

    console.log("wrapperjs-loader: " + JSON.stringify(queries));

    var exports = 'module.exports = function(' + args + '){ \n\n' +
        '' + source +
        '\n' +
        '   return ' + returns + '; \n' +
        '\n}';
    return exports;
};

