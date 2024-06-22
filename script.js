document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');

  // Function to toggle menu button visibility based on scroll position
  const toggleMenuButton = () => {
      if (window.scrollY > 200) {
          menuButton.style.display = 'block';
      } else {
          menuButton.style.display = 'none';
          dropdownMenu.style.display = 'none'; // Ensure dropdown is hidden when button disappears
          menuButton.classList.remove('clicked'); // Ensure button state is reset
      }
  };

  // Check scroll position on page load
  toggleMenuButton();

  // Show the menu button on scroll
  window.addEventListener('scroll', toggleMenuButton);

  // Toggle dropdown menu on button click
  menuButton.addEventListener('click', () => {
      if (dropdownMenu.style.display === 'block') {
          dropdownMenu.style.display = 'none';
      } else {
          dropdownMenu.style.display = 'block';
      }
      menuButton.classList.toggle('clicked'); // Toggle the clicked class
  });
  // Hide dropdown menu when clicking outside
  document.addEventListener('click', (event) => {
      if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.style.display = 'none';
          menuButton.classList.remove('clicked'); // Remove the clicked class
      }
  });
});
