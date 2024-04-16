document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('tableBody');
    const searchInput = document.getElementById('searchInput');

    let collegesData = []; // This will hold the college data

    // Dummy JSON data for colleges (replace with your data)
    const dummyColleges = [
        { name: 'IIT Delhi - Indian Institute of Technology[IITD]', location: 'New Delhi', featured: false, collegeDuniaRating: '1<sup>st</sup>/35 in India', fees: '2,54,650', userReviewRating: '8.7/10' },
        { name: 'Parul University', location: 'Vadodra', featured: true, collegeDuniaRating: '99<sup>th</sup>/147 in India', fees: '1,49,000', userReviewRating: '8.1/10' },
        { name: 'IIT Madras - Indian Institute of Technology- [IITM]', location: 'Chennai', featured: false, collegeDuniaRating: '3<sup>rd</sup>/131 in India', fees: '2,09,550', userReviewRating: '8.6/10' },
        { name: 'IIT Mumbai - Indian Institute of Technology[IITM]', location: 'Mumbai', featured: false, collegeDuniaRating: '1<sup>st</sup>/35 in India', fees: '2,54,650', userReviewRating: '8.7/10' }
        // Add more colleges here
    ];

    // Populate collegesData with dummyColleges initially
    collegesData = [...dummyColleges];

    // Function to render colleges into the table
    function renderColleges(colleges) {
        tableBody.innerHTML = ''; // Clear existing table rows
        colleges.forEach(college => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${college.name}</td>
                <td>${college.location}</td>
                <td>${college.featured ? '<span class="featured">Featured</span>' : ''}</td>
                <td>${college.collegeDuniaRating}</td>
                <td>${college.fees}</td>
                <td>${college.userReviewRating}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Initial render of colleges
    renderColleges(collegesData);

    // Function to handle sorting
    function sortBy(property, order) {
        collegesData.sort((a, b) => {
            const valueA = a[property];
            const valueB = b[property];
            if (order === 'asc') {
                return valueA - valueB;
            } else {
                return valueB - valueA;
            }
        });
        renderColleges(collegesData);
    }

    // Event listener for search input
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const filteredColleges = dummyColleges.filter(college =>
            college.name.toLowerCase().includes(searchTerm)
        );
        renderColleges(filteredColleges);
    });

    // Event listener for sorting buttons (example usage)
    // Assuming you have buttons with IDs sortRatingAsc, sortRatingDesc, etc.
    document.getElementById('sortRatingAsc').addEventListener('click', () => sortBy('collegeDuniaRating', 'asc'));
    document.getElementById('sortRatingDesc').addEventListener('click', () => sortBy('collegeDuniaRating', 'desc'));

    // Infinite scroll functionality (pseudo code)
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            // Fetch more data and append to collegesData
            // Example: collegesData.push(...moreColleges);
            // Then renderColleges(collegesData);
        }
    });
});




