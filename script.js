document.getElementById('toggle').addEventListener('click', toggleTimeline);

let isAscending = true;

function toggleTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const sortedItems = Array.from(timelineItems).sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        
        if (isAscending) {
            // Sort ascending (Oldest to newest)
            return dateA - dateB;
        } else {
            // Sort descending (Newest to oldest)
            return dateB - dateA;
        }
    });
    
    // Reversing the sorting order for next click
    isAscending = !isAscending;

    // Update button text
    document.getElementById('toggle').textContent = isAscending ? "Eskiden Yeniye ⌃" : "Yeniden Eskiye ⌵";

    // Append sorted items back to the timeline
    const timeline = document.getElementById('timeline');
    sortedItems.forEach(item => {
        timeline.appendChild(item);
    });
}
