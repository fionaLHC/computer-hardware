
    
    
    
    // JavaScript to toggle the dropdown menu
    document.addEventListener("DOMContentLoaded", function(event) {
        var dropdown = document.querySelector('.dropdown');
        dropdown.addEventListener('click', function() {
            this.querySelector('.dropdown-content').classList.toggle('show');
        });
    });

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
