function route(handle,pathname,resp,req) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
         handle[pathname](resp,req);
    } else {
        console.log("No request handler found for " + pathname);
        resp.writeHead(404, {"Content-Type": "text/plain"});
        resp.write("404 Not found");
        resp.end();
    }
}

exports.route = route;