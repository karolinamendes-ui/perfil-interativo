function flores(){

    for(let i = 0; i < 35; i++){

        const flor = document.createElement("div");

        flor.classList.add("flor");
        flor.innerHTML = "🌸";

        flor.style.left = Math.random() * window.innerWidth + "px";
        flor.style.fontSize = (Math.random() * 20 + 20) + "px";
        flor.style.animationDuration = (Math.random() * 3 + 2) + "s";

        document.body.appendChild(flor);

        setTimeout(() => {
            flor.remove();
        }, 5000);
    }

}
