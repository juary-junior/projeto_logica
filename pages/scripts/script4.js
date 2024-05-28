const botaoFeedback = document.getElementById("botao-feedback");

botaoFeedback.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = 'index.html';
});

function showSummary(type) {
    const container = document.getElementById("container");
    const feedback = document.getElementById("feedback");
    if (type === 'certa') {
        window.location.href = 'page5.html';
    } else {
        container.classList.add("hidden")
        feedback.classList.remove("hidden")
    }
}
