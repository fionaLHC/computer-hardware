
    
    
    
    // JavaScript to toggle the dropdown menu
    // document.addEventListener("DOMContentLoaded", function(event) {
    //     var dropdown = document.querySelector('.dropdown');
    //     dropdown.addEventListener('click', function() {
    //         this.querySelector('.dropdown-content').classList.toggle('show');
    //     });
    // });

    // // Close the dropdown menu if the user clicks outside of it
    // window.onclick = function(event) {
    //     if (!event.target.matches('.dropdown-btn')) {
    //         var dropdowns = document.getElementsByClassName("dropdown-content");
    //         for (var i = 0; i < dropdowns.length; i++) {
    //             var openDropdown = dropdowns[i];
    //             if (openDropdown.classList.contains('show')) {
    //                 openDropdown.classList.remove('show');
    //             }
    //         }
    //     }
    // }

    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const submenu = item.querySelector('.sub-menu');
            if (submenu) submenu.style.display = 'block';
        });

        item.addEventListener('mouseout', function() {
            const submenu = item.querySelector('.sub-menu');
            if (submenu) submenu.style.display = 'none';
        });
    });
