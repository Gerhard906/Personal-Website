document,addEventListener("DOMContentLoaded", () => {
    const text = "I recently finished my studies towards a Bachelors in IT at Belgium Campus. I love coding and making efficient solutions to problems. My studies included work on back-end and front-end programming and I am excited to learn and develop specialties on any and all aspects of the development cycle."
    let index = 0;

    function typeText(){
        if (index <= text.length){
            document.getElementById("mainText").textContent += text.charAt(index);
            index++
            setTimeout(typeText,20);
        }
    }
    typeText();

    var titles = ["Software Developer", "Web Developer", "Programmer", "Designer", "Problem Solver"]
    let counter = 0
    function cycleTitles(){    
        document.getElementById("cycleTitle").textContent = titles[counter];
        counter++
        if (counter >= titles.length){
            counter = 0
        }
            setTimeout(cycleTitles, 5000);       
        }
        cycleTitles();
    })

