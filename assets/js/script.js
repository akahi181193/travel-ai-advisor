// 簡単な旅行データベース
const travelDatabase = {
    spring: {
        domestic: {
            name: "京都の桜",
            location: "京都, 日本",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400",
            price: "¥45,000〜",
            duration: "2泊3日",
            highlights: ["清水寺の桜", "哲学の道", "祇園散策"],
            description: "古都京都で日本の春を満喫",
            page: "pages/destinations/kyoto-spring.html"
        },
        international: {
            name: "ワシントンD.C.の桜",
            location: "アメリカ",
            image: "https://images.unsplash.com/photo-1523803840911-59d1feeea1f9?w=400",
            price: "¥180,000〜",
            duration: "4泊6日",
            highlights: ["ポトマック川の桜", "スミソニアン博物館", "ホワイトハウス見学"],
            description: "アメリカで楽しむ春の桜と文化",
            page: "#"
        }
    },
    summer: {
        domestic: {
            name: "沖縄の青い海",
            location: "沖縄, 日本",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
            price: "¥65,000〜",
            duration: "3泊4日",
            highlights: ["美ら海水族館", "青の洞窟シュノーケル", "首里城"],
            description: "エメラルドグリーンの海と南国リゾート",
            page: "pages/destinations/okinawa-summer.html"
        },
        international: {
            name: "バリ島リゾート",
            location: "インドネシア",
            image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400",
            price: "¥120,000〜",
            duration: "4泊5日",
            highlights: ["ウブドの棚田", "ビーチリゾート", "バリ寺院巡り"],
            description: "神々の島でトロピカルリゾート体験",
            page: "#"
        }
    },
    autumn: {
        domestic: {
            name: "日光の紅葉",
            location: "栃木, 日本",
            image: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?w=400",
            price: "¥35,000〜",
            duration: "1泊2日",
            highlights: ["華厳の滝", "中禅寺湖", "東照宮"],
            description: "歴史ある日光で美しい紅葉狩り",
            page: "pages/destinations/nikko-autumn.html"
        },
        international: {
            name: "カナダ メープル街道",
            location: "カナダ",
            image: "https://images.unsplash.com/photo-1521653589781-8a0c35e2a2aa?w=400",
            price: "¥250,000〜",
            duration: "6泊8日",
            highlights: ["ナイアガラの滝", "メープル街道ドライブ", "モントリオール"],
            description: "世界最高峰の紅葉スポット",
            page: "#"
        }
    },
    winter: {
        domestic: {
            name: "札幌雪まつり",
            location: "北海道, 日本",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
            price: "¥55,000〜",
            duration: "2泊3日",
            highlights: ["雪まつり", "すすきの", "小樽運河"],
            description: "雪と氷の祭典と北海道グルメ",
            page: "pages/destinations/sapporo-winter.html"
        },
        international: {
            name: "フィンランド オーロラ",
            location: "フィンランド",
            image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=400",
            price: "¥300,000〜",
            duration: "5泊7日",
            highlights: ["オーロラ観測", "ガラスイグルー", "ハスキー犬ぞり"],
            description: "神秘のオーロラと極北の体験",
            page: "#"
        }
    }
};

// DOM要素の取得
const form = document.getElementById('travelForm');
const results = document.getElementById('results');
const questionnaire = document.querySelector('.questionnaire');
const loadingOverlay = document.getElementById('loadingOverlay');

// プログレスバー
let currentStep = 0;
const totalSteps = 3; // season, budget, destination

// フォーム送信イベント
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 入力値の取得
    const formData = new FormData(form);
    const preferences = {
        season: formData.get('season'),
        budget: formData.get('budget'),
        destination: formData.get('destination')
    };
    
    // バリデーション
    if (!preferences.season || !preferences.budget || !preferences.destination) {
        alert('すべての項目を選択してください。');
        return;
    }
    
    // ローディング表示
    showLoading();
    
    // 2秒後に結果表示（実際のAPIコールをシミュレート）
    setTimeout(() => {
        const recommendations = generateRecommendations(preferences);
        displayRecommendations(recommendations);
        showResults();
        hideLoading();
    }, 2000);
});

// 推奨旅行先の生成
function generateRecommendations(preferences) {
    const { season, destination } = preferences;
    
    if (travelDatabase[season] && travelDatabase[season][destination]) {
        return [travelDatabase[season][destination]];
    }
    
    // フォールバック：すべての選択肢を表示
    return Object.values(travelDatabase).map(seasonData => 
        Object.values(seasonData)
    ).flat();
}

// 推奨結果の表示
function displayRecommendations(recommendations) {
    const container = document.getElementById('recommendations');
    
    if (recommendations.length === 0) {
        container.innerHTML = '<p>申し訳ございません。条件に合う旅行先が見つかりませんでした。</p>';
        return;
    }
    
    container.innerHTML = recommendations.map(rec => `
        <div class="recommendation-card">
            <div class="recommendation-image">
                <img src="${rec.image}" alt="${rec.name}" loading="lazy">
            </div>
            <div class="recommendation-content">
                <h3 class="recommendation-title">${rec.name}</h3>
                <p class="recommendation-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${rec.location}
                </p>
                <p class="recommendation-description">${rec.description}</p>
                <div class="recommendation-highlights">
                    ${rec.highlights.map(highlight => `
                        <span class="highlight-tag">
                            <i class="fas fa-star"></i>
                            ${highlight}
                        </span>
                    `).join('')}
                </div>
                <div class="recommendation-details">
                    <div class="detail-item">
                        <i class="fas fa-yen-sign"></i>
                        <span>${rec.price}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <span>${rec.duration}</span>
                    </div>
                </div>
                <button class="details-btn" onclick="viewDetails('${rec.page}')">
                    <i class="fas fa-info-circle"></i>
                    詳細を見る
                </button>
            </div>
        </div>
    `).join('');
}

// 詳細ページへ移動
function viewDetails(page) {
    if (page === '#') {
        alert('このプランの詳細ページは準備中です。');
        return;
    }
    window.location.href = page;
}

// 結果表示
function showResults() {
    questionnaire.style.display = 'none';
    results.classList.remove('hidden');
    results.scrollIntoView({ behavior: 'smooth' });
}

// ローディング表示
function showLoading() {
    loadingOverlay.style.display = 'flex';
}

// ローディング非表示
function hideLoading() {
    loadingOverlay.style.display = 'none';
}

// リセット機能
document.getElementById('resetBtn').addEventListener('click', function() {
    form.reset();
    questionnaire.style.display = 'block';
    results.classList.add('hidden');
    currentStep = 0;
    updateProgress();
    document.querySelector('.questionnaire').scrollIntoView({ behavior: 'smooth' });
});

// プログレス更新
function updateProgress() {
    const progress = (currentStep / totalSteps) * 100;
    document.querySelector('.progress-fill').style.width = `${progress}%`;
    document.querySelector('.progress-text').textContent = `${currentStep}/${totalSteps} 完了`;
}

// ラジオボタンの変更を監視してプログレスを更新
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // 選択された項目をカウント
        const seasonSelected = document.querySelector('input[name="season"]:checked');
        const budgetSelected = document.querySelector('input[name="budget"]:checked');
        const destinationSelected = document.querySelector('input[name="destination"]:checked');
        
        currentStep = 0;
        if (seasonSelected) currentStep++;
        if (budgetSelected) currentStep++;
        if (destinationSelected) currentStep++;
        
        updateProgress();
    });
});

// スクロールToTopボタン
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// スクロール位置でボタン表示制御
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (window.pageYOffset > 300) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.pointerEvents = 'auto';
    } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.pointerEvents = 'none';
    }
});

// ヘルプ機能
function showHelp() {
    alert('使い方：\n1. 希望する季節を選択\n2. 予算を選択\n3. 国内・海外を選択\n4. 検索ボタンをクリック');
}

// ダークモード切り替え
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('darkMode', newTheme === 'dark');
    
    const themeIcon = document.querySelector('.theme-toggle i');
    const themeText = document.querySelector('.theme-toggle span');
    
    if (newTheme === 'dark') {
        themeIcon.className = 'fas fa-sun';
        if (themeText) themeText.textContent = 'ライトモード';
    } else {
        themeIcon.className = 'fas fa-moon';
        if (themeText) themeText.textContent = 'ダークモード';
    }
}

// ダークモードの初期化
document.addEventListener('DOMContentLoaded', function() {
    const savedThemeDark = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    const toggleBtn = document.querySelector('.theme-toggle');
    const icon = toggleBtn ? toggleBtn.querySelector('i') : null;
    const text = toggleBtn ? toggleBtn.querySelector('span') : null;

    const applyTheme = (isDark) => {
        body.setAttribute('data-theme', isDark ? 'dark' : 'light');
        if (icon) icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        if (text) text.textContent = isDark ? 'ライトモード' : 'ダークモード';
    };

    applyTheme(savedThemeDark);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const isDark = body.getAttribute('data-theme') !== 'dark';
            applyTheme(isDark);
            localStorage.setItem('darkMode', isDark);
        });
    }

    // 初期プログレス設定
    updateProgress();
});

// 互換性: 古い inline onclick を呼んでも動くように (念のため)
window.toggleTheme = function() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') !== 'dark';
    body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('darkMode', isDark);
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        const icon = toggleBtn.querySelector('i');
        const text = toggleBtn.querySelector('span');
        if (icon) icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        if (text) text.textContent = isDark ? 'ライトモード' : 'ダークモード';
    }
};
