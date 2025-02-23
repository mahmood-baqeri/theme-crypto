function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar-sandbox');
    const sidebarButton = document.querySelector('.toggle-btn-sandbox');
    // Check if the sidebar-sandbox is hidden or shown and toggle its position
    if (sidebar.style.right === '-45px') {
      sidebar.style.right = '-265px'; // Hide the sidebar-sandbox
      sidebar.className = 'sidebar-sandbox sidebar-sandbox-close';
      sidebarButton.classList.add('aniamte-slide-left-cs');
   

    } else {
      sidebar.style.right = '-45px'; // Show the sidebar-sandbox
      sidebar.className = 'sidebar-sandbox sidebar-sandbox-open';
      sidebarButton.classList.remove('aniamte-slide-left-cs');
    }
  }

// Timer js code
document.querySelectorAll("span#countdown-sandbox").forEach((countdownElement) => {
  const targetDate = new Date(countdownElement.getAttribute("data-finaldate")).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      countdownElement.innerHTML = "به اتمام رسید (˘･_･˘) ";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownElement.querySelector("#ens-days").textContent = days.toString().padStart(2, '0');
    countdownElement.querySelector("#ens-hours").textContent = hours.toString().padStart(2, '0');
    countdownElement.querySelector("#ens-minutes").textContent = minutes.toString().padStart(2, '0');
    countdownElement.querySelector("#ens-seconds").textContent = seconds.toString().padStart(2, '0');
  }

  // Update the countdown every second
  const interval = setInterval(updateCountdown, 1000);

  // Initialize the countdown
  updateCountdown();
});

// Define a function to continuously search and remove
function searchAndRemoveElementorModal() {
	const addButton = document.querySelector('.elementor-add-section-area-button.elementor-add-template-button');
	
	if (addButton) {
        addButton.remove();
    }
	
}
setInterval(searchAndRemoveElementorModal, 1000);

document.addEventListener('copy', function(event) {
    event.preventDefault();
    alert('Copying is disabled in RTL SanBox.');
});