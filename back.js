// Search functionality
function searchCommunities() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const communityCards = document.querySelectorAll('.community-card');
    
    communityCards.forEach(card => {
        const communityName = card.getAttribute('data-name').toLowerCase();
        if (communityName.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Join Community Action
function joinCommunity(communityName) {
    alert(`You have joined the ${communityName} community!`);
}
