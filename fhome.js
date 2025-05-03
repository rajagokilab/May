document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const mobileMenuLinks = mobileMenu.querySelectorAll("a");

    function toggleMobileMenu() {
        mobileMenu.classList.remove("hidden");
        setTimeout(() => {
            mobileMenu.classList.toggle("translate-x-full");
        }, 10); // allow DOM paint
    }

    hamburgerBtn.addEventListener("click", toggleMobileMenu);
    closeMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("translate-x-full");
        setTimeout(() => {
            mobileMenu.classList.add("hidden");
        }, 500); // match duration
    });
    mobileMenuLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("translate-x-full");
            setTimeout(() => {
                mobileMenu.classList.add("hidden");
            }, 500);
        });
    });

    // Animate header on page load
    const mainHeader = document.getElementById("main-header");
    setTimeout(() => {
        mainHeader.classList.remove("-translate-y-10", "opacity-0");
        mainHeader.classList.add("translate-y-0", "opacity-100");
    }, 100);
});   
//   stregnth
function navigateToPage() {
    // Replace with actual navigation logic
    alert("Navigation triggered.");
}
// sticky header
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
header.classList.add('bg-gray-900', 'bg-opacity-40', 'shadow-md');
header.classList.remove('bg-transparent');
} else {
header.classList.remove('bg-gray-800', 'bg-opacity-40', 'shadow-md');
header.classList.add('bg-transparent');
}
});
// FOOTER
function updateCountdown() {
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 3);
targetDate.setHours(8, 9, 59, 999);

const now = new Date().getTime();
const difference = targetDate - now;

const days = Math.floor(difference / (1000 * 60 * 60 * 24));
const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

document.getElementById('days').innerText = String(days).padStart(2, '0');
document.getElementById('hours').innerText = String(hours).padStart(2, '0');
document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');

if (difference < 0) {
clearInterval(countdownInterval);
document.querySelector('.countdown').innerHTML = '<div class="text-danger">Deal Ended!</div>';
}
}

document.getElementById('shopNowBtn').onclick = function () {
window.location.href = 'equipment.html';
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();