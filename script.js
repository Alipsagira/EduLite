

function showOfflineAlert(lessonName) {
  alert(`${lessonName} is not available offline. Please connect to the internet.`);
}

// Attach click event to offline lessons
document.querySelectorAll('[data-lesson]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const lessonName = event.target.dataset.lesson;
    showOfflineAlert(lessonName);
});
});
