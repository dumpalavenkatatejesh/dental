document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-orange');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you! Our team will contact you shortly for a free consultation.');
            console.log('Consultation requested for:', button.parentElement.querySelector('h3').textContent);
        });
    });
});
document.querySelectorAll('.patient img').forEach(img => {
    img.addEventListener('click', () => {
        alert(`You clicked on ${img.alt}'s transformation!`);
    });
});
document.querySelectorAll('.features li').forEach(item => {
    item.addEventListener('click', () => {
        alert(`More info: ${item.textContent}`);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.city').forEach(city => {
        city.addEventListener('click', () => {
            const cityName = city.querySelector('h3').textContent;
            alert(`Book an appointment in ${cityName}! Our team will contact you shortly.`);
            console.log('City selected for booking:', cityName);
        });
    });
});
document.querySelectorAll(".location-item").forEach(item => {
    item.addEventListener("click", () => {
        alert(`You selected: ${item.textContent.trim().split("\n")[0]}`);
    });
});
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-question span');
        const isVisible = answer.style.display === 'block';

        // Collapse all others
        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
        document.querySelectorAll('.faq-question span').forEach(s => s.textContent = '+');

        // Toggle current
        if (!isVisible) {
            answer.style.display = 'block';
            icon.textContent = '−';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top on logo click
    const logo = document.querySelector('.footer-logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Highlight active footer link
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.style.textDecoration = 'underline';
        }
    });

    // Optional: Lazy load long legal text or additional footer info
    const footerText = document.querySelector('.footer-bottom');
    if (footerText) {
        setTimeout(() => {
            footerText.style.opacity = 1;
        }, 100); // slight delay for effect
    }
});