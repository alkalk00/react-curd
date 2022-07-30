import axios from 'axios';

export async function Request(url,method,headers,par){
    //to check if data present or not
    return par ? axios({
        url: url,
        method: method,
        headers: headers,
        data: par,
        // timeout: 1000
    }) : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
        // timeout: 1000
    })
}

const getstudentsDetails = ()=>{
    const headers ={
        "Content-Type": "application/json",
    }
    return Request("https://my-json-server.typicode.com/alkalk00/db-demo/students","GET",headers,{},)
}

const poststudentsDetails = (data)=>{
    const headers ={
        "Content-Type": "application/json",
    }
    return Request("https://my-json-server.typicode.com/alkalk00/db-demo/students","POST",headers,data,)
}

const getstudentsDetailsById = (id)=>{
    const headers ={
        "Content-Type": "application/json",
    }
    return Request("https://my-json-server.typicode.com/alkalk00/db-demo/students/"+id,"GET",headers,)
}

const updatestudentsDetails = (data,id)=>{
    const headers ={
        "Content-Type": "application/json",
    }
    return Request("https://my-json-server.typicode.com/alkalk00/db-demo/students/"+id,"PUT",headers,data,)
}

const deletestudentsDetails = (id)=>{
    const headers ={
        "Content-Type": "application/json",
    }
    return Request("https://my-json-server.typicode.com/alkalk00/db-demo/students/"+id,"DELETE",headers    ,)
}

export {getstudentsDetails,poststudentsDetails, getstudentsDetailsById, updatestudentsDetails ,deletestudentsDetails};