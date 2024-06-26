document.addEventListener('DOMContentLoaded', () => {
    //// Slideshow ////
    let currentIndex = 0;
    const slides = document.querySelector('.slides');

    function showSlide(index) {
        const totalSlides = document.querySelectorAll('.slide').length;

        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000); // Change slide every 5 seconds

    //// Smooth Scroll ////
    function scrollToContainer(containerId) {
        const container = document.getElementById(containerId);
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    //// Counter ////
    function counter(id, start, end, duration) {
        const obj = document.getElementById(id);
        let current = start;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const step = Math.abs(Math.floor(duration / range));
        const timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, step);
    }

    counter("count1", 1, 73, 1000);
    counter("count2", 1, 20, 1000);
    counter("count3", 0, 40, 1000);
    counter("count4", 0, 80, 1000);
    counter("count5", 0, 30, 1000);

    //// Filter Cards ////
    const filterButtons = document.querySelectorAll(".filter button");
    const cards = document.querySelectorAll(".card");
    
    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("--active"));
            
            // Add active class to the clicked button
            this.classList.add("--active");
            
            // Get the filter category
            const filterCategory = this.dataset.category;
            console.log("filre",filterCategory); // Log the filter category
            
            // Show or hide cards based on the filter category
            cards.forEach(card => {
                const cardCategory = card.dataset.category;
                const showCard = filterCategory === "all" || cardCategory === filterCategory;
                
                // Toggle the hide-card class based on the showCard condition
                if (showCard) {
                    card.classList.remove("hide-card");
                } else {
                    card.classList.add("hide-card");
                }
            });
        });
    });

    
    
});

