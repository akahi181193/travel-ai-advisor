// Destination page functionality

let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
let selectedPlan = null;

// Auto-rotate hero images
function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto-rotate every 5 seconds
setInterval(nextSlide, 5000);

// Smooth scrolling functions
function scrollToBooking() {
    document.getElementById('booking').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToItinerary() {
    document.getElementById('itinerary').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Plan selection and booking
const planData = {
    basic: {
        name: 'ベーシックプラン',
        price: 45000,
        features: [
            '2泊3日の宿泊',
            '主要観光地入場料',
            '交通費（京都・奈良）',
            '朝食2回',
            '旅行保険'
        ]
    },
    premium: {
        name: 'プレミアムプラン',
        price: 68000,
        features: [
            '高級旅館での宿泊',
            '全観光地入場料',
            '専用車でのエスコート',
            '京会席ディナー',
            '着物レンタル',
            '茶道体験'
        ]
    },
    luxury: {
        name: 'ラグジュアリープラン',
        price: 120000,
        features: [
            '最高級リゾート宿泊',
            'プライベートガイド',
            '専用車チャーター',
            'ミシュラン料理',
            '特別文化体験',
            '24時間コンシェルジュ'
        ]
    }
};

function selectPlan(planType) {
    selectedPlan = planType;
    const plan = planData[planType];
    
    // Update modal content
    document.getElementById('selectedPlanName').textContent = plan.name;
    document.getElementById('selectedPlanPrice').textContent = `¥${plan.price.toLocaleString()} / 人`;
    
    updatePricing();
    
    // Show modal
    document.getElementById('bookingModal').classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('startDate').min = today;
}

function closeModal() {
    document.getElementById('bookingModal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

function updatePricing() {
    if (!selectedPlan) return;
    
    const plan = planData[selectedPlan];
    const travelers = parseInt(document.getElementById('travelers').value) || 2;
    const planTotal = plan.price * travelers;
    const taxRate = 0.1;
    const taxAmount = Math.floor(planTotal * taxRate);
    const totalAmount = planTotal + taxAmount;
    
    document.getElementById('planTotal').textContent = `¥${planTotal.toLocaleString()}`;
    document.getElementById('taxAmount').textContent = `¥${taxAmount.toLocaleString()}`;
    document.getElementById('totalAmount').textContent = `¥${totalAmount.toLocaleString()}`;
}

// Payment method toggle
document.addEventListener('DOMContentLoaded', function() {
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    const creditForm = document.getElementById('creditCardForm');
    
    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            if (this.value === 'credit') {
                creditForm.style.display = 'block';
            } else {
                creditForm.style.display = 'none';
            }
        });
    });
    
    // Travelers count change
    const travelersSelect = document.getElementById('travelers');
    if (travelersSelect) {
        travelersSelect.addEventListener('change', updatePricing);
    }
    
    // Form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmission);
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('bookingModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Favorite button toggle
    const favoriteBtn = document.querySelector('.btn-favorite');
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = '#ff6b9d';
                showNotification('お気に入りに追加しました', 'success');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '#667eea';
                showNotification('お気に入りから削除しました', 'info');
            }
        });
    }
    
    // Share button
    const shareBtn = document.querySelector('.btn-share');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: '京都・奈良 桜の古都めぐり',
                    text: '春の京都・奈良旅行プランをチェック！',
                    url: window.location.href
                });
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(window.location.href).then(() => {
                    showNotification('URLをコピーしました', 'success');
                });
            }
        });
    }
    
    // Card number formatting
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            if (formattedValue.length > 19) formattedValue = formattedValue.substr(0, 19);
            e.target.value = formattedValue;
        });
    }
    
    // Expiry date formatting
    const expiryInput = document.getElementById('expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
    
    // CVV input restriction
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
        });
    }
});

function handleBookingSubmission(e) {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 処理中...';
    submitBtn.disabled = true;
    
    // Simulate booking process
    setTimeout(() => {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success
        showBookingSuccess();
        
        // Close modal
        closeModal();
    }, 3000);
}

function showBookingSuccess() {
    // Create success modal
    const successModal = document.createElement('div');
    successModal.className = 'modal show';
    successModal.innerHTML = `
        <div class="modal-content" style="text-align: center; max-width: 500px;">
            <div class="modal-body">
                <div style="font-size: 4rem; color: #48bb78; margin-bottom: 20px;">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2 style="color: #2d3748; margin-bottom: 15px;">予約完了！</h2>
                <p style="color: #666; margin-bottom: 25px;">
                    ご予約ありがとうございます。<br>
                    確認メールを送信いたしました。
                </p>
                <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
                    <h4 style="color: #2d3748; margin-bottom: 10px;">予約番号</h4>
                    <p style="font-size: 1.5rem; font-weight: 700; color: #667eea; margin: 0;">
                        #TRV${Date.now().toString().slice(-6)}
                    </p>
                </div>
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button class="btn-secondary" onclick="this.closest('.modal').remove()">
                        閉じる
                    </button>
                    <button class="btn-primary" onclick="window.location.href='index.html'">
                        ホームに戻る
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(successModal);
    
    // Auto remove after 10 seconds
    setTimeout(() => {
        if (successModal.parentNode) {
            successModal.remove();
        }
    }, 10000);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Scroll animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, { threshold: 0.1 });
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
    
    // Observe pricing cards
    document.querySelectorAll('.pricing-card').forEach(card => {
        observer.observe(card);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', observeElements);
