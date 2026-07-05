// ========================================================
// 1️⃣ بارت الـ HAMBURGER MENU (خاص بصفحة الخدمات)
// ========================================================
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

if (hamburger && menu) {
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // سد المنيو أوتوماتيكياً ملي يتكليكا على شي رابط
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });
}

// ========================================================
// 2️⃣ بارت الـ MODAL & INPUT (فتح وقفل فورم الطلبات)
// ========================================================
const modalForm = document.getElementById('modalForm');
const closeFormBtn = document.getElementById('closeFormBtn');
const clientLocationInput = document.getElementById('clientLocation');

// هاد الفانكشن هي اللي كاتعيط ليها من الـ HTML بـ onclick="handleServiceSelection()"
function handleServiceSelection() {
    if (modalForm) {
        modalForm.style.display = 'flex';
    }
    if (clientLocationInput) {
        clientLocationInput.value = "";
        clientLocationInput.placeholder = "Ex: Casablanca, Maarif";
    }
}

if (closeFormBtn && modalForm) {
    closeFormBtn.addEventListener('click', function() {
        modalForm.style.display = 'none';
    });
}

window.addEventListener('click', function(event) {
    if (event.target === modalForm) {
        modalForm.style.display = 'none';
    }
});

// ========================================================
// 3️⃣ بارت إرسال البيانات للداتابيز (MySQL)
// ========================================================
const clientForm = document.getElementById('clientForm');

if (clientForm) {
    clientForm.addEventListener('submit', function(event) {
        event.preventDefault(); // حبس الصفحة باش ما ديرش ريفريش
        
        const name = document.getElementById('clientName').value;
        const phone = document.getElementById('clientPhone').value;
        const location = document.getElementById('clientLocation').value;
        
        const formData = new FormData();
        formData.append('clientName', name);
        formData.append('clientPhone', phone);
        formData.append('clientLocation', location);
        
        fetch('save_request.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert('Votre demande a été envoyée avec succès! 🚀');
                clientForm.reset(); 
                if (modalForm) modalForm.style.display = 'none'; 
            } else {
                alert('Erreur: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Une erreur est survenue lors de l\'envoi.');
        });
    });
}