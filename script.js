
// Reveal elements when scrolling
const revealElements = document.querySelectorAll(
    '.course-card, .section-heading, .hero-content, .hero-image'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Button click animation
document.querySelectorAll('.primary-btn, .nav-btn, .course-card a')
.forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.96)';

        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

document.getElementById("enquiryForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Add your WhatsApp number with country code (without +)
    const whatsappNumber = "918839333464";

    const name = document.getElementById("studentName").value;
    const guardian = document.getElementById("guardianName").value;
    const phone = document.getElementById("studentPhone").value;
    const email = document.getElementById("studentEmail").value;
    const course = document.getElementById("studentCourse").value;
    const school = document.getElementById("schoolName").value;
    const address = document.getElementById("studentAddress").value;
    const message = document.getElementById("studentMessage").value;

    const whatsappMessage =
`New Admission Enquiry - Divine Classes

Student Name: ${name}
Guardian Name: ${guardian}
Mobile: ${phone}
Email: ${email}
Course: ${course}
School/College: ${school}
Address: ${address}
Message: ${message}`;

    const url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappMessage);

    window.open(url, "_blank");
});

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(function(image) {
    image.addEventListener("click", function() {
        document.getElementById("previewImage").src = this.src;
        document.getElementById("imagePreview").style.display = "flex";
    });
});

function closePreview() {
    document.getElementById("imagePreview").style.display = "none";
}

document.getElementById("imagePreview")?.addEventListener("click", function(event) {
    if (event.target === this) {
        closePreview();
    }
});
