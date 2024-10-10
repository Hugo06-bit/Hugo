function showSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Show the selected section
    const activeSection = document.getElementById(section);
    activeSection.classList.add('active');
}

// Show the home section by default on load
window.onload = () => {
    showSection('home');
};
