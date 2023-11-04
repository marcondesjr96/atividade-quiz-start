document.getElementById("submit-button").addEventListener("click", function () {
    const form = document.getElementById("quiz-form");
    let pontuacao = 0;

    const respostas = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value,
        q4: form.q4.value,
        q5: form.q5.value,
      };

    
    if(respostas.q1 === "a") pontuacao++
    

    if(respostas.q2 === "c") pontuacao++


    if(respostas.q3 === "a") pontuacao++


    if(respostas.q4 === "b") pontuacao++


    if(respostas.q5 === "a") pontuacao++


  
    const result = document.getElementById("result");
    result.innerHTML = `Você acertou ${pontuacao} de 5 perguntas.`;
  });


  