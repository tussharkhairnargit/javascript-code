//const axios = require('axios');
//const { bearerToken } = require('./token');
import axios from 'axios';
import {bearerToken} from './token.js';   
axios.get('https://api-uat.laboredge.com/api/client-mobile-service/v1/master/joborder/filter?displayChildFacility=true&clientId=244138', {
    headers: {
        'accept': 'application/json, text/plain, */*',
        'authorization': bearerToken, //'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsYXN0TmFtZSI6IiIsInVzZXJfbmFtZSI6ImFib3RAeW9wbWFpbC5jb20iLCJzeXN0ZW1Vc2VyIjpmYWxzZSwiYWdlbmN5SWQiOjIxOSwiY2xpZW50X2lkIjoidm1zIiwib3JnYW5pemF0aW9uSWQiOjE0OSwicG93ZXJVc2VyIjpmYWxzZSwiYXBwbGljYXRpb25UeXBlSWQiOiJBVFNfQ0xJRU5UIiwib3JnYW5pemF0aW9uSWRlbnRpZmllciI6IlN0YWZmRE5BIFVBVCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE3MzMzOTgwMjQsImp0aSI6IjhhNDRjMDIzLWQ4NWYtNGUyMC04ODA0LTM4NjViMjA5ZDVkYSIsImVtYWlsIjoiYWJvdEB5b3BtYWlsLmNvbSIsImVuYWJsZU1hc2tDYW5kaWRhdGVFbWFpbFBob25lIjpmYWxzZSwiY2xpZW50SWQiOjI0NDEzOCwicm9sZUlkIjoxMjIzLCJoaWVyYXJjaHlFbmFibGVkIjpmYWxzZSwiY2xpZW50Q29udGFjdElkIjoyMzk5MTE1LCJ1c2VySWQiOjY5MTY5NCwiYXV0aG9yaXRpZXMiOlsiQVRTX0NMSUVOVCJdLCJvcmdhbml6YXRpb25UeXBlIjoiQVRTIiwiZmlyc3ROYW1lIjoiSG91c2UiLCJvcmdhbml6YXRpb25Db2RlIjoiU0ROQVVBVCIsIm9yZ2FuaXphdGlvbkNvdW50cnlJZCI6NTUsInRlbmFudElkIjoiVEVOQU5UX1NETkFVQVQiLCJjYW5kaWRhdGVJZCI6bnVsbH0.of7kAWarN31ThoKlZSf9OXTDFK4fBodF_WM3Rrcnx1I',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'Referer': 'https://client-app-uat.staffdna.com/',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
}).then(response => {
    console.log(response.data);
    // response.data.facilities.forEach((element, index) => {
    //     element.value = index;
    //     element.label = element.shiftType;
    //     console.log(element)
    // });
}).catch(error => {
    console.error('Error:', error);
});
