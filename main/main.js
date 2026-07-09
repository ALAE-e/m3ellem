// ==========================================
// 1. MENU BURGER
// ==========================================
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

if (hamburger && menu) {
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('active'); 
        });
    });
}

// ==========================================
// 2. SE CONNECTER MODAL (فورم تسجيل الدخول)
// ==========================================
const openLogin = document.getElementById('openLogin');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');

if (openLogin && loginModal && closeLogin) {
    openLogin.addEventListener('click', function(){
        loginModal.style.display = 'flex';
    });
    closeLogin.addEventListener('click', function(){
        loginModal.style.display = 'none';
    });
}

// ==========================================
// 3. DEMANDE SERVICE CARD (إظهار الفـورم عند الضغط على الخدمة)
// ==========================================
const servicesCards = document.querySelectorAll('.service-card');
const demandeModal = document.getElementById('demandeModal');
const closeDemande = document.getElementById('closeDemande'); // <-- تم تصحيح الإسم هنا

if (servicesCards.length > 0 && demandeModal) {
    servicesCards.forEach(function(card){
        card.addEventListener('click', function(event){
            event.preventDefault(); // منع الرابط يدوز لصفحة أخرى
            
            // سد المودال د اللوݣين أولا يلا كان مفتوح بالصدفة
            if (loginModal) loginModal.style.display = 'none'; 
            
            // فتح الفورم د الطلبات ف البلاصة
            demandeModal.style.display = 'flex';
        });
    });
}

// قفل الفورم د الطلبات عند الضغط على X
if (closeDemande && demandeModal) {
    closeDemande.addEventListener('click', function(){
        demandeModal.style.display = 'none';
    });
}

// ==========================================
// 4. SCROLL & MENU ACTIVATION (Intersection Observer)
// ==========================================
const howItWorksSection = document.getElementById('how-it-works') || document.querySelector('.how-it-works'); 
const howItWorksLink = document.querySelector('.menu a[href="#how-it-works"]') || document.querySelector('.menu a[href*="camarche"]');

if (howItWorksSection && howItWorksLink) {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                howItWorksLink.classList.add('active'); 
            } else {
                howItWorksLink.classList.remove('active');
            }
        });
    }, {
        threshold: 0.5 
    });

    observer.observe(howItWorksSection);
}