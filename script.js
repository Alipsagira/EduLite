

// Handle lessons that aren't cached
function showOfflineAlert(lessonName) {
  const message = `${lessonName} is not available offline. Please connect to the internet.`;
  alert(message);
}

// Attach event listeners to fallback links
document.querySelectorAll('[data-lesson]').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent link default
    const lesson = event.target.dataset.lesson;
    showOfflineAlert(lesson);
});
});
