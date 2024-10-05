const blindsDiv = document.getElementById("Blinds");

window.scrollTo({ top: 0, behavior: 'smooth' });

setInterval(removeBlinds, 3000);

function removeBlinds() {
    blindsDiv.remove();
}