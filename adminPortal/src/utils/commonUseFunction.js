
//this function takes a camel case string and return a space separated sting
//i-e it converts a string  like 'helloThere' or 'HelloThere' to 'Hello There'
import moment from 'moment'
import React from 'react'
export const camelCaseToNormal = (string) => {
    var text = string;
    var result = text.replace(/([A-Z])/g, " $1");
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult
}
const styles = {
    btn: {

        display: 'inlineBlock',
        padding: '2px 10px',
        borderRadius: '14px',
        textTransform: 'capitalize'
    },
    yellow: {
        color: '#937935',
        background: ' #F7DB8E',
    },
    green: {
        color: '#51bda7',
        background: ' #D9F7ED',
    },
    red: {
        color: '#EE3F44',
        background: ' #FDF5F6',
    },
    grey: {
        color: '#9CA9B8',
        background: ' #EAEDF0',

    }
}
export const renderStatus = (status) => {



    if (status === 'approved' || status === 'active' || status === 'upComing' || status === 'paid') {
        return <span style={{ ...styles.green, ...styles.btn }}>{status}</span>
    }
    if (status === 'pending' || status === 'missed') {
        return <span style={{ ...styles.yellow, ...styles.btn }}>{status}</span>
    }
    if (status === 'completed') {
        return <span style={{ ...styles.grey, ...styles.btn }}>{status}</span>
    }
    if (status === 'blocked' || status === 'cancelled' || status === 'block' || status === 'unPaid' || status === 'deleted') {
        return <span style={{ ...styles.red, ...styles.btn }}>{status}</span>
    }
}


export const convertStringToHTML = (string) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(string, 'text/html');
    doc = doc.body.innerHTML
    doc = JSON.stringify(doc)
    doc = doc.replace(/['"]+/g, '')
    return doc
}

export const renderDate = (date, format = "MMMM Do YYYY") => {

    return moment(date).format(format);
}
export const printConsole = (action, data) => {
    return console.log(`===========${action}=========`, data)
}