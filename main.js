document.querySelectorAll('.news-item').forEach(item => {
    let rotation = 0;
    
    item.addEventListener('click', function() {
        rotation += 360;
        this.style.transform = `rotate(${rotation}deg)`;
    });
    item.addEventListener('mouseenter', function() {
        this.style.transform = `translateY(-3px)`;
        this.style.backgroundColor = 'rgba(128, 128, 128, 0.1)';
        this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    })
    item.addEventListener('mouseleave', function() {
        this.style.transform = `translateY(3px)`;
        this.style.backgroundColor = 'white';
        this.style.boxShadow = 'none';
    })});
    
const ulHead = document.getElementById('mainUl');
ulHead.addEventListener('click', function() {
const currentColor = this.style.backgroundColor;
if (currentColor === 'rgb(242, 244, 247)') {
    this.style.backgroundColor = 'white';
} 
else {
        this.style.backgroundColor = '#F2F4F7';
    }
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}

document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const dropdownContent = clickedElement.closest('.dropdown-content');
    
    if (dropdownContent) {
        const dropdownDiv = clickedElement.closest('.dropdown-content > div');
        
        if (dropdownDiv) {
            const pElement = dropdownDiv.querySelector('p');
            const selectedText = pElement.textContent;
            
            const dropbtn = document.querySelector('.dropbtn');
            
            if (dropbtn && selectedText) {
                dropbtn.innerHTML = `
                    ${selectedText.trim()}
                    <img src="./images/Left Icon.png">
                `;
                dropdownContent.classList.remove('show');
            }
        }
    }
});