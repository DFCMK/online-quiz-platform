const marvelquestion = [
            {
                question: 'Who is Iron Man?',
                options: ["Tony Stark", "Steve Rogers", "Bruce Banner", "Thor"],
                answer: 0

            },
                        {
                question: 'Who is Captain America?',
                options: ["Tony Stark", "Steve Rogers", "Bruce Banner", "Thor"],
                answer: 1

            },
                        {
                question: 'Who is Black Widow?',
                options: ["Tony Stark", "Steve Rogers", "Bruce Banner", "Natasha Romanoff"],
                answer: 3

            },
                        {
                question: 'Who is Hulk?',
                options: ["Tony Stark", "Steve Rogers", "Bruce Banner", "Thor"],
                answer: 2

            },
        ]

        const dcquestion = [
                       {
                question: 'Who is Batman?',
                options: ["Bruce Wayne", "Clark Kent", "Barry Allen", "Diana Prince"],
                answer: 0

            },
                        {
                question: 'Who is Superman?',
                options: ["Bruce Wayne", "Clark Kent", "Barry Allen", "Diana Prince"],
                answer: 1

            },
                        {
                question: 'Who is Black Flash?',
                options: ["Bruce Wayne", "Clark Kent", "Barry Allen", "Diana Prince"],
                answer: 2

            },
                        {
                question: 'Who is Catwoman?',
                options: ["Bruce Wayne", "Clark Kent", "Barry Allen", "Diana Prince"],
                answer: 3

            },
        ]

        const quizType = localStorage.getItem('quizType');
        const questionNumber = localStorage.getItem('questionNumber');
        let score = localStorage.getItem('score');

        const questionElement = document.getElementById("question");
        const option1Element = document.getElementById("option1");
        const option2Element = document.getElementById("option2");
        const option3Element = document.getElementById("option3");
        const option4Element = document.getElementById("option4");

        const previousquestion = () => {
            if(quizType == 'marvel'){
                if(questionNumber > 1){
                    localStorage.setItem("questionNumber", parseInt(questionNumber) - 1);
                    window.location.href = "quiz.html";
                    setquestion();

                }else{
                    setscore();
                    localStorage.setItem("finalscore", `${score}/${marvelquestion.length}`);
                    window.location.href = "score.html";
                }
            }
            else if(quizType == 'dc'){
                if(questionNumber < 1){
                    localStorage.setItem("questionNumber", parseInt(questionNumber) - 1);
                    window.location.href = "quiz.html";
                    setquestion();

                }else{
                    window.alert("Minimum Reached");
                }
            }
        }
        const nextquestion = () => {
            if(quizType == 'marvel'){
                if(questionNumber < marvelquestion.length){
                    localStorage.setItem("questionNumber", parseInt(questionNumber) + 1);
                    window.location.href = "quiz.html";

                }else{
                    setscore();
                    localStorage.setItem("finalscore", `${score}/${marvelquestion.length}`);
                    window.location.href = "score.html";
                }
            }
            else if(quizType == 'dc'){
                if(questionNumber < dcquestion.length){
                    localStorage.setItem("questionNumber", parseInt(questionNumber) + 1);
                    window.location.href = "quiz.html";

                }else{
                    setscore();
                    localStorage.setItem("finalscore", `${score}/${dcquestion.length}`);
                    window.location.href = "score.html";
                }
            }
        }
        const quitquiz = () => {
            localStorage.clear();
            window.location.href = 'index.html';
        }

        const status = () => {
            console.log('QUIZ type is ', quizType);
            console.log('Question no. type is ', questionNumber);
            console.log('Score is ', score);
        }

        const selectedoption = (optionnumber) =>{
            const optionValue = document.getElementById('option' + optionnumber).innerHTML;
            
            if(quizType == "marvel"){
                if(optionValue == marvelquestion[questionNumber - 1].options[marvelquestion[questionNumber - 1].answer]){
                    document.getElementById("option" + optionnumber + "out").claassList.add("rightanswer")
                }
                else{
                    document.getElementById("option" + optionnumber + "out").classList.add("wronganswer")
            }
        }
        else if(quizType == "dc"){
                if(optionValue == dcquestion[questionNumber - 1].options[dcquestion[questionNumber - 1].answer]){
                    document.getElementById("option" + optionnumber + "out").claassList.add("rightanswer")
                }
                else{
                    document.getElementById("option" + optionnumber + "out").claassList.add("wronganswer")
            }
        }
    }

        const clickoption = (optionnumber) => {
            const optionValue = document.getElementById('option' + optionnumber).innerHTML;

            if(localStorage.getItem(`answer ${questionNumber}`) == null){
                if(quizType == 'marvel'){
                    if(optionValue == marvelquestion[questionNumber - 1].options[marvelquestion[questionNumber - 1].answer]){
                        document.getElementById("option" + optionnumber + "out").classList.add("rightanswer");
                        score++
                        localStorage.setItem("score", score);
                        setscore();

                    }else{
                        document.getElementById("option" + optionnumber + "out").classList.add("wronganswer");
                    }
                }
                else if(quizType == 'dc'){
                    if(optionValue == dcquestion[questionNumber - 1].options[dcquestion[questionNumber - 1].answer]){
                        document.getElementById("option" + optionnumber + "out").classList.add("rightanswer");
                        score++
                        localStorage.setItem("score", score);
                        setscore();


                    }else{
                        document.getElementById("option" + optionnumber + "out").classList.add("wronganswer");
                    }
                }

                localStorage.setItem(`answer ${questionNumber}`, optionnumber);

            }else{
                window.alert("You have already answered this question");
            }
        }

        const setquestion = () => {

            if(quizType == 'marvel'){
                status();

                questionElement.innerHTML = marvelquestion[questionNumber - 1].question;
                option1Element.innerHTML = marvelquestion[questionNumber - 1].options[0];
                option2Element.innerHTML = marvelquestion[questionNumber - 1].options[1];
                option3Element.innerHTML = marvelquestion[questionNumber - 1].options[3];
                option4Element.innerHTML = marvelquestion[questionNumber - 1].options[2];

            if(localStorage.getItem(`answer ${questionNumber}`) != null){
                selectedoption(localStorage.getItem(`answer ${questionNumber}`))
            }
            }else if (quizType == 'dc'){
                status()

                questionElement.innerHTML = dcquestion[questionNumber - 1].question;
                option1Element.innerHTML = dcquestion[questionNumber - 1].options[0];
                option2Element.innerHTML = dcquestion[questionNumber - 1].options[1];
                option3Element.innerHTML = dcquestion[questionNumber - 1].options[2];
                option4Element.innerHTML = dcquestion[questionNumber - 1].options[3];

            if(localStorage.getItem(`answer ${questionNumber}`) != null){
                selectedoption(localStorage.getItem(`answer ${questionNumber}`))
            }
            }else{
                console.log('No quiz type selected');
                quitquiz();
            }
        }
        const setscore = () => {
            let length = 0;
            if(quizType == "marvel"){
                length = marvelquestion.length;
            }
            else if (quizType == "dc"){
                length = dcquestion.length;
            }

            document.getElementById('score').innerHTML = `${score}/${length}`;
        }

        setquestion();
        setscore();