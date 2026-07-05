//menu borgir
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


//se connecter btn 
const openLogin = document.getElementById('openLogin');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');
    //css on off rak fahm
openLogin.addEventListener('click', function(){
    loginModal.style.display = 'flex';
});
closeLogin.addEventListener('click', function(){
    loginModal.style.display = 'none';
});

//demande service card main page
const servicesCards = document.querySelectorAll('.service-card');
const demandeModal = document.getElementById('demandeModal');
const closeDemade = document.getElementById('closeDemande');
servicesCards.forEach(function(card){
    card.addEventListener('click', function(event){
        event.preventDefault();
        demandeModal.style.display = 'flex';
    });
});
    //close service
closeDemande.addEventListener('click', function(){
    demandeModal.style.display = 'none';
})

// ==========================================
// بارت الـ SCROLL & MENU ACTIVATION
// ==========================================

// 1. نقبطو السيكشن د "Comment ça marche" (تأكد من الـ ID ديالها ف الـ HTML واش 'how-it-works' أو بدلو هنا)
const howItWorksSection = document.getElementById('how-it-works') || document.querySelector('.how-it-works'); 

// 2. نقبطو الرابط ديالها اللي كاين ف الـ Menu (مثلا اللي عندو href="#how-it-works")
const howItWorksLink = document.querySelector('.menu a[href="#how-it-works"]') || document.querySelector('.menu a[href*="camarche"]');

if (howItWorksSection && howItWorksLink) {
    // نديرو الـ Observer اللي غايراقب السيكشن واش بانت ف الشاشة
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            // يلا كانت السيكشن باينة ف الشاشة بنسبة فايتة 50%
            if (entry.isIntersecting) {
                // نزيدو كلاس التلوين للرابط (تأكد من كلاس التلوين ديالك واش active أو current)
                howItWorksLink.classList.add('active'); 
            } else {
                // ملي يخرج عليها اليوزر، يحيد اللون
                howItWorksLink.classList.remove('active');
            }
        });
    }, {
        threshold: 0.5 // يعني غير تبان نصف السيكشن ف الشاشة يخدم التلوين
    });

    // نطلقو المراقبة على السيكشن
    observer.observe(howItWorksSection);
}