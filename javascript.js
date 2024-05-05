// JavaScript code for filtering recipes based on search
const searchBar = document.getElementById('searchBar');
const sections = document.querySelectorAll('section');

searchBar.addEventListener('input', function(event) {
    const searchText = event.target.value.toLowerCase();
    
    sections.forEach(section => {
        const headingText = section.querySelector('h2').innerText.toLowerCase();
        if (headingText.includes(searchText)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});
