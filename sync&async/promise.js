const hasMeeting = true;
const promise = new Promise((resolve, reject) =>{
    if(hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google meet",
            Time: "10:00 PM",
        };  
        resolve(meetingDetails);
    } else if(!hasMeeting) {
        reject(new Error("meeting alrady scheduled!"));
    }
});

promise
     .then((res) => {
console.log(JSON.stringify(res));
     })
     .catch((err) =>{
console.log(err.message);
     });