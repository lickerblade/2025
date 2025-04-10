// Timeline sorting functionality
document.getElementById('ascending').addEventListener('click', () => {
    sortTimeline('ascending');
});

document.getElementById('descending').addEventListener('click', () => {
    sortTimeline('descending');
});

function sortTimeline(order) {
    const items = document.querySelectorAll('.timeline-item');
    const sortedItems = Array.from(items).sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        
        if (order === 'ascending') {
            return dateA - dateB;
        } else {
            return dateB - dateA;
        }
    });
    
    const timeline = document.getElementById('timeline');
    sortedItems.forEach(item => {
        timeline.appendChild(item);
    });
}
