// Main JavaScript for Website Blocker website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQ Accordion
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        
        if (header) {
            header.addEventListener('click', function() {
                accordion.classList.toggle('active');
            });
        }
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real implementation, you would send this data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Highlight active section in navigation
    const sections = document.querySelectorAll('section');
    
    function highlightActiveSection() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    
    // Initialize screenshots for lightbox view if needed
    const screenshots = document.querySelectorAll('.screenshot');
    
    screenshots.forEach(screenshot => {
        screenshot.addEventListener('click', function() {
            // In a more complex implementation, you could add a lightbox here
            // For now, we'll just make the image open in a new tab
            const imgSrc = this.getAttribute('src');
            window.open(imgSrc, '_blank');
        });
    });
    
    // Download button tracking (in a real implementation)
    const downloadBtn = document.querySelector('.download-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // In a real implementation, you might want to track downloads
            console.log('Extension download initiated');
            // You could send an analytics event here
        });
    }
});
