const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');

//Unhandled promise rejections
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject(new Error('Something went wrong'));
        resolve('Promise resolved');
    }, 2000);
});

myPromise.then(result => {
    console.log('Promise result:', result);
}).catch(error => {
    console.error('Promise error:', error);
});
