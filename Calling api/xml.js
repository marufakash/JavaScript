// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()
// method - GET, POST, PUT, DELETE, PATCH

const makeRequest = (method, url,data) =>{
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () =>{
        let data = xhr.response;
        console.log(xhr.status);
        console.log(xhr.statusText);
        console.log(xhr.responseText);
        console.log(xhr.responseURL);
        console.log(JSON.parse(data));
    }

    xhr.onerror = () =>{
        console.log("Error is here");
    }

    xhr.send(JSON.stringify(data));
}

const getData = () => {
    makeRequest("GET", 'https://jsonplaceholder.typicode.com/posts');
}
//getData();

const sendData = () => {
    makeRequest("POST", 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
}
//sendData();

const updateData = () => {
    makeRequest("PUT", 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'fooma',
        body: 'barma',
        userId: 1,
    });
}
//updateData();

const updateSingleData = () => {
    makeRequest("PATCH", 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'This is changed',
    });
}
updateSingleData();

const deleteData = () => {
    makeRequest("DELETE", 'https://jsonplaceholder.typicode.com/posts/1', {
    });
}
//deleteData();
