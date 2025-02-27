document,addEventListener("DOMContentLoaded", () => {

    const birthDate = new Date (1999,6,25,9);

    function GetAge(){
        var now = new Date();
        let age = now.getFullYear() - birthDate.getFullYear();
        let month = now.getMonth() - birthDate.getMonth();
        let day = now.getDate() - birthDate.getDate();
        let birthTime = birthDate.getTime();
        let currentTime = now.getTime();
        let timeDifference = currentTime - birthTime;
        let totalSeconds = Math.floor(timeDifference / 1000);
        let seconds = totalSeconds % 60;
        let totalMinutes = Math.floor(totalSeconds / 60);
        let minutes = totalMinutes % 60;
        let totalHours = Math.floor(totalMinutes / 60);
        let hours = totalHours % 24;
        
        if (day < 0){
            month--;
            let lastmonth =  new Date(now.getFullYear(),now.getMonth(),0);
            day += lastmonth.getDate();
        }

        if (month < 0){
            age--;
            month += 12;
        }

        document.getElementById("age").textContent = "I am " + age + " year, " + month + " months, " + day + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds old!";
        setTimeout(GetAge, 1000);
    }

    GetAge();
})