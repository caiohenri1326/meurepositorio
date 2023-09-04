const texts = [
    "Estagiario",
    "Freelancer",
    "Front-end",
    "Desenvolvedor"
  ];
  
  
  const TextoAnimado = document.getElementById("text-animation");
  const barraf = document.createElement("h6");


  TextoAnimado.style.color = "rgb(8, 69, 182)";
  TextoAnimado.style.position = "relative";
  TextoAnimado.style.margin = "0px 0px 0px 5px";
  barraf.textContent = "|";
  
  barraf.style.fontSize = "27px";
  barraf.style.position = "absolute";

  document.body.appendChild(barraf);

  let currentTextIndex = 0;
  let currentText = "";
  let letterIndex = 0;
  
  function typeText() {
    if (currentTextIndex === texts.length) {
      currentTextIndex = 0;
    }
    else{
    }
    currentText = texts[currentTextIndex];
    TextoAnimado.textContent = currentText.slice(0, letterIndex++);
    MoveBarra();
  
    if (letterIndex <= currentText.length) {
      setTimeout(typeText, 100);
    } else {
      letterIndex++;
      setTimeout(eraseText, 1000);
    }
  }
  function MoveBarra(){
    const LimiteBarra = TextoAnimado.getBoundingClientRect();
    barraf.style.top = `${TextoAnimado.offsetTop}px`;
    barraf.style.left = `${LimiteBarra.right - barraf.clientWidth}px`;
    barraf.style.margin = "0px 0px 0px 7px";
    barraf.style.color = "rgb(8, 69, 182)";
  }
  
  let visivel = true;

  function EstaVisivel(){
    if(visivel){
      barraf.style.opacity = "0.0";
      barraf.style.margin = "0px 0px 0px 7px";
    }
    else{
      barraf.style.opacity = "1";
      barraf.style.margin = "0px 0px 0px 7px"
    }
    visivel = !visivel;
  }

  function eraseText() {
    TextoAnimado.textContent = currentText.slice(0, letterIndex--);
    
    MoveBarra();
    if (letterIndex >= 0) {
      setTimeout(eraseText, 100);
    } else {
      currentTextIndex++;
      setTimeout(typeText, 500);
    }
  }
  setInterval(EstaVisivel, 600);
  typeText();