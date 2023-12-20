const targetTime = new Date().getTime() + 3600 * 1000 * 24 * 14;

function updateTimer() {
  const now = new Date().getTime();
  const timeDifference = targetTime - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  updateCard("days", days, "days-card");
  updateCard("hours", hours, "hours-card");
  updateCard("minutes", minutes, "minutes-card");
  updateCard("seconds", seconds, "seconds-card");
}

function updateCard(cardId, value, cardContainerId) {
  const card = document.getElementById(cardId);
  const cardContainer = document.getElementById(cardContainerId);

  if (card.innerText !== value.toString().padStart(2, '0')) {
    cardContainer.classList.add("flip-card");
    setTimeout(() => {
      cardContainer.classList.remove("flip-card");
      card.innerText = value.toString().padStart(2, '0');
    }, 250);
  }
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to update the timer
updateTimer();