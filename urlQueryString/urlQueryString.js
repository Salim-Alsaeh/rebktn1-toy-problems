/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
    let decodedQueryString = decodeURIComponent(url);
    if (!url.includes('?')) {
        return undefined;
    }
    let queryArray = decodedQueryString.split('?')[1].split('&');
    let result = [];
    queryArray.forEach(function (query) {
        result.push(query.split('='));
    });
    return result;
}