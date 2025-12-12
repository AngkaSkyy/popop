// =======================================
// 1. DATA SIMULASI BATIK DENGAN FOTO KHUSUS
// =======================================
const dataBatik = [
    {
        id: 1,
        nama_motif: "Parang Rusak Barong",
        asal_daerah: "Yogyakarta",
        teknik: "Tulis",
        pengaruh_budaya: ["Keraton", "Hindu-Jawa", "Megalitik"],
        seniman: "Keluarga Hardjono",
        img_url: "images/parang.jpg",  // ← Path lokal ke gambar di folder images
        is_larangan: true,
        filosofi: "Melambangkan perjuangan manusia melawan kejahatan dan ego, serta menjaga keseimbangan alam.",
        sejarah: "Motif tertua dan terlarang yang hanya boleh dikenakan oleh Raja dan keturunannya saat upacara adat.",
        larangan: "Motif Larangan Agung Keraton, tidak boleh dikenakan rakyat biasa di luar acara tertentu."
    },
    {
        id: 2,
        nama_motif: "Mega Mendung",
        asal_daerah: "Cirebon",
        teknik: "Kombinasi",
        pengaruh_budaya: ["Pesisir", "Tionghoa", "Islam"],
        seniman: "Kuasa Trusmi",
        img_url: "https://www.freepik.com/premium-photo/vector-illustration-traditional-indonesian-ornament-batik-mega-mendung-2_356774614.htm#fromView=search&page=1&position=5&uuid=90e68168-52dc-46b4-9125-4bcc2ce63e89&query=batik+mega+mendung", 
        is_larangan: false,
        filosofi: "Awan tebal yang membawa hujan (kesuburan). Melambangkan ketenangan, kesabaran, dan kearifan.",
        sejarah: "Diciptakan oleh Pangeran Cakrabuwana, sangat dipengaruhi seni Tionghoa (awan naga).",
        larangan: "Tidak ada larangan."
    },
    {
        id: 3,
        nama_motif: "Sidomukti",
        asal_daerah: "Solo",
        teknik: "Tulis",
        pengaruh_budaya: ["Keraton", "Filosofis", "Kemakmuran"],
        seniman: "Batik Danar Hadi",
        img_url: "images/sidomukti.jpg", // ← Path lokal
        is_larangan: false,
        filosofi: "Sido (menjadi) Mukti (makmur/mulia). Harapan untuk mencapai kemakmuran, kebahagiaan, dan kedudukan tinggi.",
        sejarah: "Sering digunakan dalam upacara pernikahan adat Jawa dan dilukis dengan pewarna soga alam.",
        larangan: "Tidak ada larangan spesifik, umum digunakan untuk pernikahan."
    },
    {
        id: 4,
        nama_motif: "Kawung Picis",
        asal_daerah: "Yogyakarta",
        teknik: "Tulis",
        pengaruh_budaya: ["Geometris", "Simbolis", "Keraton"],
        seniman: "Keluarga Kenceng",
        img_url: "images/kawung.jpg", // ← Path lokal
        is_larangan: true,
        filosofi: "Melambangkan kesucian, kebijaksanaan, dan kontrol diri, diambil dari buah kolang-kaling.",
        sejarah: "Motif larangan yang menunjukkan status. Dikenakan oleh abdi dalem senior atau bangsawan.",
        larangan: "Motif Larangan Keraton, digunakan abdi dalem senior atau bangsawan tertentu."
    },
    {
        id: 5,
        nama_motif: "Jlamprang",
        asal_daerah: "Pekalongan",
        teknik: "Cap",
        pengaruh_budaya: ["India", "Arab", "Geometris"],
        seniman: "Batik Oey",
        img_url: "images/jlamprang.jpg", // ← Path lokal
        is_larangan: false,
        filosofi: "Melambangkan roda kehidupan dan delapan penjuru mata angin, menunjukkan keberagaman Pekalongan.",
        sejarah: "Motif non-figuratif yang populer di kalangan pedagang, hasil akulturasi motif patola India.",
        larangan: "Tidak ada larangan."
    },
    {
        id: 6,
        nama_motif: "Sekar Jagad",
        asal_daerah: "Yogyakarta",
        teknik: "Tulis",
        pengaruh_budaya: ["Keraton", "Alam", "Filosofis"],
        seniman: "Batik Keraton",
        img_url: "images/sekarjagad.jpg", // ← Path lokal
        is_larangan: false,
        filosofi: "Sekar (bunga) Jagad (dunia). Melambangkan keindahan dan keragaman dunia.",
        sejarah: "Motif yang menggambarkan peta dunia dengan berbagai pulau dan bunga.",
        larangan: "Tidak ada larangan."
    },
    {
        id: 7,
        nama_motif: "Truntum",
        asal_daerah: "Solo",
        teknik: "Tulis",
        pengaruh_budaya: ["Keraton", "Romantis", "Filosofis"],
        seniman: "Ratu Beruk",
        img_url: "images/truntum.jpg", // ← Path lokal
        is_larangan: false,
        filosofi: "Melambangkan cinta yang tumbuh dan bersemi kembali, harapan untuk keharmonisan rumah tangga.",
        sejarah: "Diciptakan oleh Ratu Beruk, permaisuri Sunan Pakubuwana III sebagai simbol cinta.",
        larangan: "Tidak ada larangan, sering digunakan oleh orang tua pengantin."
    },
    {
        id: 8,
        nama_motif: "Tambal",
        asal_daerah: "Yogyakarta",
        teknik: "Tulis",
        pengaruh_budaya: ["Simbolis", "Penyembuhan", "Keraton"],
        seniman: "Tidak diketahui",
        img_url: "https://unsplash.com/id/foto/FBxQHzS7uJ8",  
        is_larangan: false,
        filosofi: "Tambal (penambal). Melambangkan penyembuhan dan perbaikan diri.",
        sejarah: "Motif yang terdiri dari berbagai pola kecil, dipercaya memiliki kekuatan menyembuhkan.",
        larangan: "Tidak ada larangan."
    }
];

const filterCategories = {
    'asal_daerah': ['Yogyakarta', 'Solo', 'Cirebon', 'Pekalongan', 'Bali', 'Jambi', 'Madura'],
    'teknik': ['Tulis', 'Cap', 'Kombinasi'],
    'pengaruh_budaya': ['Keraton', 'Pesisir', 'Tionghoa', 'Islam', 'Hindu-Jawa', 'Geometris', 'Alam', 'Romantis', 'Simbolis', 'India', 'Arab']
};

// =======================================
// 2. INISIALISASI APLIKASI
// =======================================
document.addEventListener('DOMContentLoaded', function() {
    // WELCOME SEQUENCE
    document.getElementById('enterButton').addEventListener('click', function() {
        document.getElementById('welcome-sequence').classList.add('welcome-hidden');
        
        setTimeout(function() {
            document.body.style.opacity = 1;
            document.getElementById('main-content').style.display = 'block';
            renderFilters();
            renderBatikGallery(dataBatik);
            
            // Inisialisasi semua fungsi
            initSmoothScroll();
            initScrollHeader();
            initTimelineAnimation();
            initScrollProgress();
            initEnhancedSmoothScroll();
            initEnhancedTimeline();
            
            // Tambahkan class active ke timeline items yang terlihat
            checkTimelineVisibility();
        }, 500);
    });

    // Otomatis masuk setelah 8 detik
    setTimeout(function() {
        if (!document.getElementById('welcome-sequence').classList.contains('welcome-hidden')) {
            document.getElementById('enterButton').click();
        }
    }, 8000);

    // Inisialisasi semua event listener
    initEventListeners();
    
    // Check URL hash on load
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        setTimeout(() => navigateTo(hash), 100);
    }
});

// =======================================
// 3. NAVIGASI ANTAR SECTION DENGAN SMOOTH SCROLL
// =======================================
function navigateTo(pageId) {
    // Update active navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const targetLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
    if (targetLink) {
        targetLink.classList.add('active');
    }
    
    // Hide all sections
    document.querySelectorAll('.page-content').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Smooth scroll ke section dengan offset untuk header
        setTimeout(() => {
            const headerHeight = document.getElementById('mainHeader').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }, 100);
        
        // Update URL hash
        history.pushState(null, null, `#${pageId}`);
    }
}

// =======================================
// 4. HEADER SCROLL EFFECT - DIPERBAIKI
// =======================================
function initScrollHeader() {
    const header = document.getElementById('mainHeader');
    let lastScrollTop = 0;
    
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Handle header shrink effect
        if (scrollTop > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
        
        // Smooth hide/show on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// =======================================
// 5. SMOOTH SCROLL ENHANCEMENT
// =======================================
function initEnhancedSmoothScroll() {
    // Smooth scroll untuk semua link internal dengan debounce
    let isScrolling = false;
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            if (!isScrolling) {
                isScrolling = true;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    const headerHeight = document.getElementById('mainHeader').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Debounce untuk mencegah multiple clicks
                    setTimeout(() => {
                        isScrolling = false;
                    }, 1000);
                }
            }
        });
    });
}

// =======================================
// 6. SCROLL PROGRESS INDICATOR
// =======================================
function initScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    
    if (!scrollProgress) return;
    
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + "%";
    });
}

// =======================================
// 7. TIMELINE ANIMATION ENHANCEMENT - DIPERBAIKI
// =======================================
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkTimelineVisibility() {
        const triggerBottom = window.innerHeight * 0.8;
        
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            
            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkTimelineVisibility);
    checkTimelineVisibility(); // Initial check
}

// Enhanced timeline animation
function initEnhancedTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    let delay = 0;
    
    timelineItems.forEach((item, index) => {
        // Set animation delay for staggered effect
        item.style.animationDelay = `${delay}s`;
        delay += 0.1;
        
        // Add intersection observer for smooth animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        observer.observe(item);
    });
}

// =======================================
// 8. FUNGSI BATIK GALLERY
// =======================================
function createBatikCard(batik) {
    const tagsHtml = batik.pengaruh_budaya.map(tag => 
        `<span class="tag tag-influence">${tag}</span>`
    ).join('');

    const laranganHtml = batik.is_larangan 
        ? `<div class="larangan-tag"><i class="fas fa-ban"></i> Larangan Keraton</div>`
        : '';

    return `
        <div class="batik-card" data-id="${batik.id}">
            <div class="image-container">
                <img src="${batik.img_url}" alt="${batik.nama_motif}" class="batik-image" />
                ${laranganHtml}
                <div class="image-overlay">
                    <p style="margin: 0; font-size: 0.9rem;">${batik.filosofi.substring(0, 100)}...</p>
                </div>
            </div>
            <div class="info-interior">
                <div class="motif-divider"></div>
                <h3 class="motif-title">${batik.nama_motif}</h3>
                <div class="detail-row"><span class="detail-label">Asal:</span><span class="detail-value">${batik.asal_daerah}</span></div>
                <div class="detail-row"><span class="detail-label">Teknik:</span><span class="detail-value">${batik.teknik}</span></div>
                <div class="detail-row"><span class="detail-label">Seniman:</span><span class="detail-value">${batik.seniman}</span></div>
                <div class="influence-tags">${tagsHtml}</div>
            </div>
            <button class="btn-detail-emas" onclick="showBatikDetail(${batik.id})">Lihat Detail <i class="fas fa-book-open"></i></button>
        </div>
    `;
}

function renderBatikGallery(data) {
    const gallery = document.getElementById('batik-gallery');
    if (!gallery) return;
    
    if (data.length === 0) {
        gallery.innerHTML = '<div style="text-align: center; padding: 60px;"><i class="fas fa-search" style="font-size: 3rem; color: var(--color-soga-tua); margin-bottom: 20px;"></i><h3 style="color: var(--color-soga-tua);">Tidak ditemukan motif batik sesuai kriteria</h3><p>Coba gunakan kata kunci lain atau hilangkan beberapa filter</p></div>';
        return;
    }
    const cardsHtml = data.map(createBatikCard).join('');
    gallery.innerHTML = cardsHtml;
}

function filterBatik() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchText = searchInput.value.toLowerCase();
    const activeFilters = getActiveFilters();

    let filteredData = dataBatik.filter(batik => {
        const matchesText = !searchText || 
            batik.nama_motif.toLowerCase().includes(searchText) ||
            batik.asal_daerah.toLowerCase().includes(searchText) ||
            batik.seniman.toLowerCase().includes(searchText) ||
            batik.filosofi.toLowerCase().includes(searchText);

        if (!matchesText) return false;

        for (const category in activeFilters) {
            const selectedValues = activeFilters[category];
            if (selectedValues.length === 0) continue; 

            if (Array.isArray(batik.pengaruh_budaya)) {
                const hasMatch = selectedValues.some(val => batik.pengaruh_budaya.includes(val));
                if (category === 'pengaruh_budaya' && !hasMatch) return false;
            } 
            else if (category !== 'pengaruh_budaya' && !selectedValues.includes(batik[category])) {
                return false;
            }
        }
        return true;
    });

    renderBatikGallery(filteredData);
}

function getActiveFilters() {
    const filters = {};
    for (const category in filterCategories) {
        filters[category] = Array.from(document.querySelectorAll(`input[name="${category}"]:checked`))
            .map(cb => cb.value);
    }
    return filters;
}

function renderFilters() {
    const filtersContainer = document.getElementById('advanced-filters');
    if (!filtersContainer) return;
    
    let filtersHtml = '';

    for (const category in filterCategories) {
        const title = category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
        
        let optionsHtml = filterCategories[category].map(option => `
            <label>
                <input type="checkbox" name="${category}" value="${option}">
                ${option}
            </label>
        `).join('');

        filtersHtml += `
            <div class="filter-group">
                <h4>${title}</h4>
                ${optionsHtml}
            </div>
        `;
    }
    filtersContainer.innerHTML = filtersHtml;
}

function toggleFilterPanel() {
    const panel = document.getElementById('advanced-filters');
    const buttonText = document.getElementById('filterText');
    
    if (!panel || !buttonText) return;
    
    panel.classList.toggle('filters-hidden');
    
    if (panel.classList.contains('filters-hidden')) {
        buttonText.textContent = 'Tampilkan Filter Lanjutan';
    } else {
        buttonText.textContent = 'Sembunyikan Filter';
    }
}

// =======================================
// 9. MODAL DETAIL BATIK
// =======================================
function showBatikDetail(id) {
    const batik = dataBatik.find(b => b.id === id);
    
    if (!batik) return;
    
    document.getElementById('modalBatikNama').innerText = batik.nama_motif;
    document.getElementById('modalAsalDaerah').innerText = batik.asal_daerah;
    document.getElementById('modalTeknik').innerText = batik.teknik;
    document.getElementById('modalSeniman').innerText = batik.seniman || "Tidak diketahui";
    document.getElementById('modalFilosofi').innerText = batik.filosofi || "Data filosofi sedang dikurasi secara spesifik.";
    document.getElementById('modalSejarah').innerText = batik.sejarah || "Data sejarah dan sumber sedang dikurasi.";
    document.getElementById('modalLarangan').innerText = batik.is_larangan ? `YA, Motif Larangan: ${batik.larangan}` : "TIDAK (Umum digunakan)";
    
    const modalImage = document.getElementById('modalBatikImage');
    if (modalImage) {
        modalImage.src = batik.img_url;
        modalImage.alt = batik.nama_motif;
    }
    
    document.getElementById('batikDetailModal').style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
}

function closeModal() {
    document.getElementById('batikDetailModal').style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
}

// =======================================
// 10. BACK TO TOP BUTTON
// =======================================
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (!backToTopButton) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =======================================
// 11. FORM SUBMISSION & INTERACTIVITY
// =======================================
function initEventListeners() {
    // Form curator hub
    const curatorSubmit = document.getElementById('submitCurator');
    if (curatorSubmit) {
        curatorSubmit.addEventListener('click', function() {
            const nama = document.getElementById('namaPemohon').value;
            const email = document.getElementById('emailPemohon').value;
            const motif = document.getElementById('namaMotif').value;
            const deskripsi = document.getElementById('deskripsiMotif').value;
            
            if (!nama || !email || !motif || !deskripsi) {
                alert('Harap isi semua field yang wajib diisi (*)');
                return;
            }
            
            // Animasi submit
            curatorSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
            curatorSubmit.disabled = true;
            
            setTimeout(function() {
                alert(`Terima kasih ${nama}!\n\nPengajuan validasi untuk motif "${motif}" telah berhasil dikirim.\nTim kurator kami akan menghubungi Anda di ${email} dalam 7-14 hari kerja.`);
                
                // Reset form
                document.getElementById('namaPemohon').value = '';
                document.getElementById('emailPemohon').value = '';
                document.getElementById('namaMotif').value = '';
                document.getElementById('deskripsiMotif').value = '';
                
                // Reset button
                curatorSubmit.innerHTML = '<i class="fas fa-paper-plane"></i> Ajukan Validasi';
                curatorSubmit.disabled = false;
            }, 1500);
        });
    }
    
    // Modul edukasi buttons
    document.querySelectorAll('.modul-btn').forEach(button => {
        button.addEventListener('click', function() {
            const modul = this.getAttribute('data-modul');
            const modulTitles = {
                'dasar': 'Dasar-dasar Batik',
                'teknik': 'Teknik Membatik',
                'peta': 'Peta Batik Nusantara'
            };
            
            // Animasi klik
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Membuka...';
            
            setTimeout(() => {
                alert(`Modul "${modulTitles[modul]}" akan segera tersedia.\nFitur pembelajaran interaktif sedang dalam pengembangan.`);
                this.innerHTML = modul === 'dasar' ? 'Mulai Belajar' : 
                               modul === 'teknik' ? 'Lihat Tutorial' : 'Lihat Peta';
            }, 800);
        });
    });
    
    // Quiz button
    const quizButton = document.getElementById('quizButton');
    if (quizButton) {
        quizButton.addEventListener('click', function() {
            // Animasi klik
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memuat...';
            this.disabled = true;
            
            setTimeout(() => {
                alert('Fitur kuis akan segera hadir!\nSaat ini sedang dalam tahap pengembangan untuk pengalaman belajar yang lebih interaktif.');
                this.innerHTML = originalText;
                this.disabled = false;
            }, 1000);
        });
    }
    
    // Search input event listener
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', filterBatik);
    }
    
    // Filter toggle button
    const filterToggle = document.getElementById('filterToggle');
    if (filterToggle) {
        filterToggle.addEventListener('click', toggleFilterPanel);
    }
    
    // Filter checkbox event listeners
    document.addEventListener('change', function(e) {
        if (e.target.matches('input[type="checkbox"][name^="asal_daerah"], input[type="checkbox"][name^="teknik"], input[type="checkbox"][name^="pengaruh_budaya"]')) {
            filterBatik();
        }
    });
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            navigateTo(pageId);
        });
    });
    
    // Footer links
    document.querySelectorAll('.footer-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            navigateTo(pageId);
        });
    });
    
    // Museum link interactivity
    const museumLink = document.querySelector('.museum-link');
    if (museumLink) {
        museumLink.addEventListener('click', function(e) {
            if (!confirm('Anda akan diarahkan ke situs Museum Batik Indonesia. Lanjutkan?')) {
                e.preventDefault();
            }
        });
    }
    
    // Close modal button
    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    // CTA buttons di hero
    document.querySelectorAll('.cta-button').forEach(button => {
        if (!button.id && button !== quizButton && button !== curatorSubmit) {
            button.addEventListener('click', function(e) {
                // Efek ripple
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.7);
                    transform: scale(0);
                    animation: ripple-animation 0.6s linear;
                    width: ${size}px;
                    height: ${size}px;
                    top: ${y}px;
                    left: ${x}px;
                `;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        }
    });
    
    // Social media icons
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            if (platform) {
                showSocialMediaInfo(platform);
            }
        });
    });
    
    // Enhanced era sections interactivity
    document.querySelectorAll('.era-section').forEach(section => {
        section.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
    
    // Add print and share functionality for sejarah section
    addPrintAndShareButtons();
    
    // Initialize back to top button
    initBackToTop();
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('batikDetailModal');
        if (event.target == modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

// =======================================
// 12. SOCIAL MEDIA HANDLERS
// =======================================
function showSocialMediaInfo(platform) {
    const platformNames = {
        'tiktok': 'TikTok: @WarisanBatikNusantara',
        'facebook': 'Facebook: JelajahBatikNusantara',
        'instagram': 'Instagram: @BATIKNUSANTARA',
        'twitter': 'Twitter: @BatikNoesantara',
        'youtube': 'YouTube: BoedayaBatikNoesantara'
    };
    
    alert(`Ikuti kami di ${platformNames[platform]}\n\nAyo bersama melestarikan warisan budaya batik Nusantara!`);
}

// =======================================
// 13. PRINT AND SHARE BUTTONS
// =======================================
function addPrintAndShareButtons() {
    const sejarahSection = document.getElementById('sejarah');
    if (!sejarahSection) return;
    
    // Print button
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i> Cetak Sejarah Batik';
    printButton.style.cssText = `
        display: block;
        margin: 30px auto;
        padding: 12px 25px;
        background: linear-gradient(135deg, var(--color-sejarah), #8e44ad);
        color: white;
        border: none;
        border-radius: 30px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    
    printButton.onmouseover = function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 10px 20px rgba(125, 60, 152, 0.3)';
    };
    
    printButton.onmouseout = function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    };
    
    printButton.onclick = function() {
        window.print();
    };
    
    // Share button
    const shareButton = document.createElement('button');
    shareButton.innerHTML = '<i class="fas fa-share-alt"></i> Bagikan Sejarah Batik';
    shareButton.style.cssText = printButton.style.cssText;
    shareButton.style.background = 'linear-gradient(135deg, var(--color-emas), var(--color-emas-cerah))';
    shareButton.style.marginLeft = '15px';
    
    shareButton.onmouseover = function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 10px 20px rgba(212, 175, 55, 0.3)';
    };
    
    shareButton.onmouseout = function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    };
    
    shareButton.onclick = function() {
        if (navigator.share) {
            navigator.share({
                title: 'Sejarah Batik Indonesia',
                text: 'Pelajari sejarah lengkap batik Indonesia dari abad ke-5 hingga pengakuan UNESCO sebagai warisan dunia.',
                url: window.location.href + '#sejarah'
            });
        } else {
            alert('Bagikan link ini: ' + window.location.href + '#sejarah');
        }
    };
    
    // Insert buttons in sejarah section
    const buttonContainer = document.createElement('div');
    buttonContainer.style.textAlign = 'center';
    buttonContainer.style.margin = '40px 0';
    buttonContainer.appendChild(printButton);
    buttonContainer.appendChild(shareButton);
    
    const container = sejarahSection.querySelector('.container');
    if (container) {
        container.appendChild(buttonContainer);
    }
}
