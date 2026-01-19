// ১. মোবাইল মেনু টগল করার জন্য
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    if (menuBtn && menu) {
        menuBtn.onclick = () => {
            menu.classList.toggle('show');
        };
    }
});

// ২. ইমেজের এরর হ্যান্ডেল করার জন্য (যদি কোনো ছবি লোড না হয়)
function handleImageError(image) {
    image.onerror = "";
    image.src = "22.jpg"; // লোগো শো করবে যদি ইভেন্ট বা মেম্বার ফটো না থাকে
    return true;
}

// ৩. পেজ স্ক্রল অ্যানিমেশন (Reveal on scroll)
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.card1, .member-card, .event-card');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.style.opacity = "1";
            reveal.style.transform = "translateY(0)";
        }
    });
});
