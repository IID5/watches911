function showDetails(title, details) {
    
    document.getElementById('modal-title').textContent = title; 
    document.getElementById('modal-details').textContent = details; 
    document.getElementById('modal').style.display = 'block'; 
}

function closeModal() {
    document.getElementById('modal').style.display = 'none'; 
}

