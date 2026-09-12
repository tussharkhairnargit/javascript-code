const { default: axios } = require("axios");

const headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en-GB;q=0.9,en;q=0.8",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsYXN0TmFtZSI6IiIsInVzZXJfbmFtZSI6ImFib3RAeW9wbWFpbC5jb20iLCJzeXN0ZW1Vc2VyIjpmYWxzZSwiYWdlbmN5SWQiOjIxOSwiY2xpZW50X2lkIjoidm1zIiwib3JnYW5pemF0aW9uSWQiOjE0OSwicG93ZXJVc2VyIjpmYWxzZSwiYXBwbGljYXRpb25UeXBlSWQiOiJBVFNfQ0xJRU5UIiwib3JnYW5pemF0aW9uSWRlbnRpZmllciI6IlN0YWZmRE5BIFVBVCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE3MzE0OTk1MDgsImp0aSI6IjU4Y2IyOTNhLWZiNmEtNDY1NC05YmFmLTRkMDMyMmExN2I3ZiIsImVtYWlsIjoiYWJvdEB5b3BtYWlsLmNvbSIsImVuYWJsZU1hc2tDYW5kaWRhdGVFbWFpbFBob25lIjpmYWxzZSwiY2xpZW50SWQiOjI0NDEzOCwicm9sZUlkIjoxMjIzLCJoaWVyYXJjaHlFbmFibGVkIjpmYWxzZSwiY2xpZW50Q29udGFjdElkIjoyMzk5MTE1LCJ1c2VySWQiOjY5MTY5NCwiYXV0aG9yaXRpZXMiOlsiQVRTX0NMSUVOVCJdLCJvcmdhbml6YXRpb25UeXBlIjoiQVRTIiwiZmlyc3ROYW1lIjoiSG91c2UiLCJvcmdhbml6YXRpb25Db2RlIjoiU0ROQVVBVCIsIm9yZ2FuaXphdGlvbkNvdW50cnlJZCI6NTUsInRlbmFudElkIjoiVEVOQU5UX1NETkFVQVQiLCJjYW5kaWRhdGVJZCI6bnVsbH0.keJtZTC6hCtuhfZDmuK3zK9T9n-EeBHBZsMEEgQxu5I",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "Referer": "http://localhost:8100/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
};

axios.get("https://api-uat.laboredge.com/api/client-mobile-service/v1/timecards/clients/244138/dashboard", {
    headers
})
.then(async response => {
    const missingList = response.data.missingList || [];
    let index = 0;
    let stop = false;
    console.log(missingList.map( item=> item.initiateTimeSheetId))
    do {
        const jobId = missingList[index]?.jobId;
        const initiateTimeSheetId = missingList[index]?.initiateTimeSheetId;
        if (!jobId) {
            console.log(`Missing jobId at index ${index}`);
            index++;
            continue;
        }
        //`https://api-uat.laboredge.com/api/job-service/v1/ats/jobs/${jobId}`
        const url = `https://api-uat.laboredge.com/api/nexusmobile-service/v2/candidates/20561926/timesheet/timeentries/` + initiateTimeSheetId
        try {
            const jobDetails = await axios.get(url, { headers });
            const jobTypeId = jobDetails.data.jobTypeId;
            console.log(`initiateTimeSheetId: ${initiateTimeSheetId}  Job ID: ${jobId}, Job Type: ${jobTypeId}`);
        } catch (error) {
            console.error(`Error fetching details for jobId ${jobId}:`, error.message);
        }
        index++;
    } while (index < missingList.length);

    if (!stop) {
        console.log("Completed processing all jobs in missingList without finding a LOCAL job type.");
    }
})
.catch(error => {
    console.error('Error fetching timecards:', error.message);
});
