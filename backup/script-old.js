// 旅行保険データベース
const insuranceDatabase = {
    solo: {
        basic: {
            name: "一人旅ベーシックプラン",
            price: "¥2,500〜/旅行",
            coverage: "¥500万",
            features: [
                "疾病・傷害治療費補償",
                "携行品損害補償",
                "個人賠償責任補償", 
                "救援者費用補償",
                "24時間日本語サポート"
            ],
            recommended: false
        },
        standard: {
            name: "一人旅スタンダードプラン",
            price: "¥4,200〜/旅行",
            coverage: "¥1000万",
            features: [
                "疾病・傷害治療費補償（高額）",
                "携行品損害補償（スマホ・カメラ含む）",
                "個人賠償責任補償",
                "救援者費用補償",
                "航空機遅延補償",
                "24時間多言語サポート",
                "オンライン診療サービス"
            ],
            recommended: true
        },
        premium: {
            name: "一人旅プレミアムプラン",
            price: "¥7,800〜/旅行",
            coverage: "¥3000万",
            features: [
                "疾病・傷害治療費補償（最高額）",
                "携行品損害補償（高級品対応）",
                "個人賠償責任補償",
                "救援者費用補償",
                "航空機遅延・欠航補償",
                "緊急帰国費用補償",
                "コンシェルジュサービス",
                "現地病院キャッシュレス対応"
            ],
            recommended: false
        }
    },
    couple: {
        basic: {
            name: "カップル・夫婦ベーシックプラン",
            price: "¥4,000〜/2名",
            coverage: "¥500万×2名",
            features: [
                "疾病・傷害治療費補償",
                "携行品損害補償",
                "個人賠償責任補償",
                "救援者費用補償",
                "24時間日本語サポート",
                "パートナー連絡サービス"
            ],
            recommended: false
        },
        standard: {
            name: "カップル・夫婦スタンダードプラン",
            price: "¥7,500〜/2名",
            coverage: "¥1000万×2名",
            features: [
                "疾病・傷害治療費補償（高額）",
                "携行品損害補償（結婚指輪等貴重品含む）",
                "個人賠償責任補償",
                "救援者費用補償",
                "航空機遅延補償",
                "ハネムーン特別補償",
                "24時間多言語サポート",
                "ペア割引適用"
            ],
            recommended: true
        },
        premium: {
            name: "カップル・夫婦プレミアムプラン", 
            price: "¥13,500〜/2名",
            coverage: "¥3000万×2名",
            features: [
                "疾病・傷害治療費補償（最高額）",
                "携行品損害補償（高級品・婚約指輪対応）",
                "個人賠償責任補償",
                "救援者費用補償",
                "航空機遅延・欠航補償",
                "緊急帰国費用補償",
                "VIPコンシェルジュサービス",
                "現地病院キャッシュレス対応",
                "ロマンチックサポート"
            ],
            recommended: false
        }
    },
    family: {
        basic: {
            name: "ファミリーベーシックプラン",
            price: "¥6,500〜/家族",
            coverage: "¥500万×家族全員",
            features: [
                "疾病・傷害治療費補償",
                "携行品損害補償",
                "個人賠償責任補償",
                "救援者費用補償", 
                "子供用特別補償",
                "24時間日本語サポート",
                "ファミリー専用ホットライン"
            ],
            recommended: false
        },
        standard: {
            name: "ファミリースタンダードプラン",
            price: "¥12,800〜/家族",
            coverage: "¥1000万×家族全員",
            features: [
                "疾病・傷害治療費補償（高額）",
                "携行品損害補償（ベビー用品含む）",
                "個人賠償責任補償",
                "救援者費用補償",
                "航空機遅延補償",
                "子供の急病対応サービス",
                "24時間多言語サポート",
                "ファミリー割引適用",
                "現地小児科医紹介"
            ],
            recommended: true
        },
        premium: {
            name: "ファミリープレミアムプラン",
            price: "¥22,000〜/家族", 
            coverage: "¥3000万×家族全員",
            features: [
                "疾病・傷害治療費補償（最高額）",
                "携行品損害補償（子供用品・おもちゃ含む）",
                "個人賠償責任補償",
                "救援者費用補償",
                "航空機遅延・欠航補償",
                "緊急帰国費用補償",
                "ファミリーコンシェルジュサービス",
                "現地病院キャッシュレス対応",
                "託児サービス紹介",
                "子供向けアクティビティ情報"
            ],
            recommended: false
        }
    },
    friends: {
        basic: {
            name: "グループベーシックプラン",
            price: "¥3,000〜/人",
            coverage: "¥500万×人数分",
            features: [
                "疾病・傷害治療費補償",
                "携行品損害補償",
                "個人賠償責任補償",
                "救援者費用補償",
                "24時間日本語サポート",
                "グループ連絡サービス"
            ],
            recommended: false
        },
        standard: {
            name: "グループスタンダードプラン",
            price: "¥5,200〜/人",
            coverage: "¥1000万×人数分",
            features: [
                "疾病・傷害治療費補償（高額）",
                "携行品損害補償（共有荷物含む）",
                "個人賠償責任補償",
                "救援者費用補償",
                "航空機遅延補償",
                "24時間多言語サポート",
                "グループ割引適用",
                "みんなで安心サポート"
            ],
            recommended: true
        },
        premium: {
            name: "グループプレミアムプラン",
            price: "¥9,500〜/人",
            coverage: "¥3000万×人数分",
            features: [
                "疾病・傷害治療費補償（最高額）",
                "携行品損害補償（高級品対応）",
                "個人賠償責任補償",
                "救援者費用補償",
                "航空機遅延・欠航補償",
                "緊急帰国費用補償",
                "グループコンシェルジュサービス",
                "現地病院キャッシュレス対応",
                "パーティー・イベント補償"
            ],
            recommended: false
        }
    }
};

// 旅行先データベース - Updated with specific Japan destinations
const travelDatabase = {
    spring: {
        domestic: {
            low: [
                {
                    title: "🌸 京都・奈良",
                    description: "桜の名所として有名な古都を巡る旅。清水寺、金閣寺、奈良公園で鹿と触れ合い、日本の伝統文化を満喫できます。",
                    highlights: ["桜の絶景", "歴史文化", "和風体験", "鹿との触れ合い"],
                    details: {
                        "おすすめスポット": ["清水寺", "金閣寺", "奈良公園", "嵐山"],
                        "グルメ": ["京料理", "和菓子", "抹茶", "奈良漬け"],
                        "アクティビティ": ["着物レンタル", "茶道体験", "寺院巡り"]
                    },
                    detailPage: "kyoto-spring.html"
                }
            ],
            medium: [
                {
                    title: "🏔️ 立山黒部アルペンルート",
                    description: "雪の大谷で有名な山岳観光ルート。壮大な自然景観と高原の清々しい空気を満喫できます。",
                    highlights: ["雪の大谷", "山岳景色", "高原リゾート", "絶景ロープウェイ"],
                    details: {
                        "おすすめスポット": ["室堂", "黒部ダム", "立山", "大観峰"],
                        "グルメ": ["高原野菜", "山菜料理", "地酒"],
                        "アクティビティ": ["トレッキング", "写真撮影", "ロープウェイ"]
                    },
                    detailPage: "tateyama-spring.html"
                }
            ]
        }
    },
    summer: {
        domestic: {
            medium: [
                {
                    title: "🏖️ 沖縄本島",
                    description: "美しいビーチと琉球文化を満喫できる南国リゾート。マリンスポーツや沖縄料理を楽しめます。",
                    highlights: ["美しいビーチ", "マリンスポーツ", "琉球文化", "沖縄料理"],
                    details: {
                        "おすすめスポット": ["美ら海水族館", "首里城", "万座毛", "国際通り"],
                        "グルメ": ["ゴーヤチャンプルー", "ソーキそば", "サーターアンダギー", "泡盛"],
                        "アクティビティ": ["シュノーケリング", "ダイビング", "文化体験"]
                    },
                    detailPage: "okinawa-summer.html"
                }
            ]
        }
    },
    autumn: {
        domestic: {
            low: [
                {
                    title: "🍁 日光・華厳の滝",
                    description: "紅葉の名所として有名な日光。華厳の滝の迫力と色鮮やかな紅葉のコントラストが美しいです。",
                    highlights: ["紅葉絶景", "華厳の滝", "温泉", "歴史文化"],
                    details: {
                        "おすすめスポット": ["華厳の滝", "中禅寺湖", "東照宮", "いろは坂"],
                        "グルメ": ["湯波料理", "地酒", "温泉まんじゅう"],
                        "アクティビティ": ["紅葉狩り", "温泉", "ハイキング"]
                    },
                    detailPage: "nikko-autumn.html"
                }
            ]
        }
    },
    winter: {
        domestic: {
            medium: [
                {
                    title: "⛄ 北海道・札幌",
                    description: "雪祭りで有名な冬の札幌。新鮮な海の幸と雪景色、温泉を楽しめる北国の魅力が満載です。",
                    highlights: ["雪祭り", "新鮮海鮮", "雪景色", "温泉"],
                    details: {
                        "おすすめスポット": ["さっぽろ雪まつり", "すすきの", "小樽運河", "定山渓温泉"],
                        "グルメ": ["海鮮丼", "ジンギスカン", "ラーメン", "スープカレー"],
                        "アクティビティ": ["雪まつり見学", "温泉", "スキー"]
                    },
                    detailPage: "sapporo-winter.html"
                }
            ]
        }
    }
};

// フォーム要素の取得
const form = document.getElementById('travelForm');
const resultsSection = document.getElementById('results');
const recommendationsDiv = document.getElementById('recommendations');
const resetBtn = document.getElementById('resetBtn');

// フォーム送信処理
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const preferences = {
        season: formData.get('season'),
        budget: formData.get('budget'),
        travelStyle: formData.get('travelStyle'),
        destination: formData.get('destination'),
        duration: formData.get('duration'),
        companions: formData.get('companions'),
        travelType: formData.get('travelType')
    };
    
    // デモ用：必要な値が不足している場合はデフォルト値を設定
    if (!preferences.travelType) preferences.travelType = 'solo';
    if (!preferences.destination) preferences.destination = 'domestic';
    if (!preferences.budget) preferences.budget = 'medium';
    if (!preferences.season) preferences.season = 'spring';
    
    // バリデーション（デモ用に緩和）
    if (!preferences.season || !preferences.budget || !preferences.destination || !preferences.travelType) {
        showNotification('すべての項目を選択してください。', 'error');
        return;
    }
    
    // ローディング表示
    showLoadingAnimation();
    
    // 少し遅延を入れて、よりリアルな感じにする
    setTimeout(() => {
        // 推奨先を生成
        const recommendations = generateRecommendations(preferences);
        displayRecommendations(recommendations);
        
        // 保険プランを生成・表示
        const insuranceRecommendations = generateInsuranceRecommendations(preferences.travelType, preferences.destination);
        displayInsuranceRecommendations(insuranceRecommendations, preferences.travelType);
        
        // 結果セクションを表示
        resultsSection.classList.remove('hidden');
        resultsSection.scrollIntoView({ behavior: 'smooth' });
        
        hideLoadingAnimation();
        showNotification('デモ用のおすすめ旅行先と保険プランを表示しました！実際のサービスではより詳細な情報をご提供いたします。', 'success', 6000);
    }, 2000);
});

// リセットボタン処理
resetBtn.addEventListener('click', function() {
    form.reset();
    resultsSection.classList.add('hidden');
    document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
});

// フォームバリデーション
function validateForm(preferences) {
    return Object.values(preferences).every(value => value && value.trim() !== '');
}

// 保険推奨生成
function generateInsuranceRecommendations(travelType, destination) {
    // デモ用：常に保険プランを返す
    if (!insuranceDatabase[travelType]) {
        // フォールバック：ソロプランを使用
        travelType = 'solo';
    }
    
    const plans = Object.values(insuranceDatabase[travelType]);
    
    // デモ用：海外旅行の場合は価格を調整
    if (destination !== 'domestic') {
        return plans.map(plan => ({
            ...plan,
            price: plan.price.replace(/¥(\d+)/, (match, price) => {
                const adjustedPrice = Math.round(parseInt(price) * 1.5);
                return `¥${adjustedPrice.toLocaleString()}`;
            })
        }));
    }
    
    return plans;
}

// 保険推奨表示
function displayInsuranceRecommendations(insuranceRecommendations, travelType) {
    const container = document.getElementById('insuranceRecommendations');
    if (!container) return;
    
    if (insuranceRecommendations.length === 0) {
        container.innerHTML = '<p>保険プランが見つかりませんでした。</p>';
        return;
    }
    
    const travelTypeNames = {
        solo: '一人旅',
        couple: 'カップル・夫婦',
        family: 'ファミリー', 
        friends: '友人グループ'
    };
    
    container.innerHTML = `
        <div class="insurance-intro">
            <h3>${travelTypeNames[travelType]}向けの保険プラン</h3>
            <p>安心して旅行を楽しむために、適切な保険プランをお選びください。</p>
        </div>
        <div class="insurance-plans">
            ${insuranceRecommendations.map(plan => `
                <div class="insurance-card ${plan.recommended ? 'recommended' : ''}">
                    ${plan.recommended ? '<div class="recommended-badge">おすすめ</div>' : ''}
                    <div class="insurance-header">
                        <h4>${plan.name}</h4>
                        <div class="insurance-price">${plan.price}</div>
                        <div class="insurance-coverage">補償額: ${plan.coverage}</div>
                    </div>
                    <div class="insurance-features">
                        ${plan.features.map(feature => `
                            <div class="insurance-feature">
                                <i class="fas fa-check"></i>
                                <span>${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="insurance-actions">
                        <button class="btn-insurance-details" onclick="showInsuranceDetails('${plan.name}', '${travelType}')">
                            詳細を見る
                        </button>
                        <button class="btn-insurance-select" onclick="selectInsurancePlan('${plan.name}', '${travelType}')">
                            このプランを選ぶ
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// 保険詳細表示
function showInsuranceDetails(planName, travelType) {
    showNotification(`${planName}の詳細情報を確認しています...`, 'info');
    // ここで詳細モーダルを表示する処理を追加可能
}

// 保険プラン選択
function selectInsurancePlan(planName, travelType) {
    showNotification(`${planName}を選択しました！旅行先の予約ページで保険もご一緒にお申し込みいただけます。`, 'success', 5000);
}

// 推奨先生成
function generateRecommendations(preferences) {
    const { season, budget, destination } = preferences;
    
    // データベースから該当する旅行先を取得
    let recommendations = [];
    
    if (travelDatabase[season] && travelDatabase[season][destination] && travelDatabase[season][destination][budget]) {
        recommendations = travelDatabase[season][destination][budget];
    }
    
    // データが見つからない場合やデモ用に、代替案を提供
    if (recommendations.length === 0) {
        recommendations = getAlternativeRecommendations(preferences);
    }
    
    // デモ用：最低3つの推奨プランを保証
    while (recommendations.length < 3) {
        const additionalPlans = generateDemoPlans(preferences, recommendations.length);
        recommendations.push(...additionalPlans);
    }
    
    // 旅行スタイルに基づいて推奨度を調整
    return recommendations.slice(0, 3).map(rec => ({
        ...rec,
        matchScore: calculateMatchScore(rec, preferences)
    })).sort((a, b) => b.matchScore - a.matchScore);
}

// 代替案生成
function getAlternativeRecommendations(preferences) {
    const { season, destination, budget } = preferences;
    
    // 一般的な推奨先を生成
    const alternatives = [
        {
            title: "🌟 カスタム旅行プラン",
            description: `${getSeasonText(season)}の${getDestinationText(destination)}旅行をお探しですね。あなたの予算（${getBudgetText(budget)}）に合わせた特別なプランをご提案いたします。`,
            highlights: ["個別カスタマイズ", "予算最適化", "現地ガイド", "特別体験"],
            details: {
                "提案内容": ["現地の隠れた名所", "地元グルメ体験", "文化交流プログラム"],
                "サポート": ["24時間日本語サポート", "緊急時対応", "現地情報提供"],
                "特典": ["早期予約割引", "グループ割引", "リピーター特典"]
            }
        },
        {
            title: "🎯 パーソナライズプラン",
            description: "あなたの詳細な要望をお聞きして、完全オーダーメイドの旅行プランを作成いたします。専門のトラベルコンサルタントがサポートします。",
            highlights: ["完全オーダーメイド", "専門コンサルタント", "詳細プランニング", "満足保証"],
            details: {
                "サービス内容": ["個別相談会", "詳細プラン作成", "予約代行サービス"],
                "特徴": ["柔軟な変更対応", "現地サポート", "写真・動画撮影サービス"],
                "保証": ["満足度保証", "安心の保険付き", "緊急時サポート"]
            }
        }
    ];
    
    return alternatives;
}

// デモ用プラン生成
function generateDemoPlans(preferences, planIndex) {
    const { season, destination, budget, travelType } = preferences;
    
    const demoPlans = [
        {
            title: `✨ ${getSeasonText(season)}特別プラン`,
            description: `${getSeasonText(season)}の魅力を最大限に体験できる特別企画です。${getTravelTypeText(travelType)}におすすめの厳選スポットをご案内します。`,
            highlights: [`${season}限定体験`, "写真スポット巡り", "地元グルメ", "文化体験"],
            details: {
                "おすすめスポット": ["絶景ポイント", "有名観光地", "隠れた名所", "グルメスポット"],
                "体験内容": ["現地ツアー", "文化体験", "グルメ体験", "ショッピング"],
                "サービス": ["日本語ガイド", "送迎サービス", "写真撮影", "お土産付き"]
            },
            detailPage: "#demo-plan-1"
        },
        {
            title: `🎊 ${getDestinationText(destination)}満喫ツアー`,
            description: `${getDestinationText(destination)}の魅力を存分に楽しめる充実のプランです。${getBudgetText(budget)}でも満足度の高い旅行をお約束します。`,
            highlights: ["人気スポット", "グルメツアー", "お得プライス", "満足保証"],
            details: {
                "人気スポット": ["定番観光地", "インスタ映えスポット", "歴史的建造物", "自然スポット"],
                "グルメ": ["地元料理", "名物グルメ", "高級レストラン", "屋台グルメ"],
                "お得情報": ["早割特典", "グループ割引", "学割適用", "シニア割引"]
            },
            detailPage: "#demo-plan-2"
        },
        {
            title: `🌈 ${getTravelTypeText(travelType)}プレミアム`,
            description: `${getTravelTypeText(travelType)}の方に特におすすめのプレミアムプランです。特別な思い出作りをサポートいたします。`,
            highlights: ["プレミアム体験", "特別サービス", "記念品付き", "写真撮影"],
            details: {
                "プレミアム特典": ["VIP待遇", "専用ガイド", "特別ディナー", "記念アルバム"],
                "サポート": ["24時間対応", "緊急サポート", "現地案内", "通訳サービス"],
                "記念品": ["オリジナルグッズ", "写真アルバム", "地域特産品", "記念証明書"]
            },
            detailPage: "#demo-plan-3"
        }
    ];
    
    return [demoPlans[planIndex] || demoPlans[0]];
}

// テキスト変換ヘルパー関数
function getSeasonText(season) {
    const seasonMap = {
        spring: '春',
        summer: '夏', 
        autumn: '秋',
        winter: '冬'
    };
    return seasonMap[season] || season;
}

function getDestinationText(destination) {
    const destinationMap = {
        domestic: '国内',
        asia: 'アジア',
        europe: 'ヨーロッパ',
        america: 'アメリカ・南米',
        oceania: 'オセアニア',
        africa: 'アフリカ'
    };
    return destinationMap[destination] || destination;
}

function getBudgetText(budget) {
    const budgetMap = {
        low: '予算重視',
        medium: '標準予算',
        high: '高級志向'
    };
    return budgetMap[budget] || budget;
}

function getTravelTypeText(travelType) {
    const travelTypeMap = {
        solo: '一人旅',
        couple: 'カップル・夫婦',
        family: 'ファミリー',
        friends: '友人グループ'
    };
    return travelTypeMap[travelType] || travelType;
}

// マッチスコア計算
function calculateMatchScore(recommendation, preferences) {
    let score = 50; // ベーススコア
    
    // 旅行スタイルに基づく調整
    if (preferences.travelStyle === 'cultural' && recommendation.highlights.includes('歴史文化')) {
        score += 20;
    }
    if (preferences.travelStyle === 'gourmet' && recommendation.details['グルメ']) {
        score += 20;
    }
    if (preferences.travelStyle === 'nature' && (recommendation.highlights.includes('自然景観') || recommendation.highlights.includes('絶景'))) {
        score += 20;
    }
    if (preferences.travelStyle === 'relaxation' && recommendation.highlights.includes('温泉')) {
        score += 20;
    }
    
    return score;
}

// 推奨先表示
function displayRecommendations(recommendations) {
    recommendationsDiv.innerHTML = '';
    
    if (recommendations.length === 0) {
        recommendationsDiv.innerHTML = '<p>申し訳ございませんが、該当する旅行先が見つかりませんでした。条件を変更してお試しください。</p>';
        return;
    }
    
    recommendations.forEach(rec => {
        const card = createRecommendationCard(rec);
        recommendationsDiv.appendChild(card);
    });
}

// 推奨先カード作成
function createRecommendationCard(recommendation) {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    
    const highlightsHTML = recommendation.highlights.map(highlight => 
        `<span class="highlight-tag">${highlight}</span>`
    ).join('');
    
    const detailsHTML = Object.entries(recommendation.details).map(([key, value]) => {
        if (Array.isArray(value)) {
            const items = value.map(item => `<li>${item}</li>`).join('');
            return `
                <div>
                    <h4><i class="fas fa-list"></i> ${key}</h4>
                    <ul>${items}</ul>
                </div>
            `;
        }
        return `<div><h4><i class="fas fa-info-circle"></i> ${key}</h4><p>${value}</p></div>`;
    }).join('');
    
    // 背景画像を動的に設定
    const bgImage = getDestinationImage(recommendation.title);
    
    card.innerHTML = `
        <div class="recommendation-header" style="background-image: ${bgImage}">
            <div class="recommendation-overlay">
                <div class="recommendation-title">${recommendation.title}</div>
            </div>
        </div>
        <div class="recommendation-content">
            <div class="recommendation-description">${recommendation.description}</div>
            <div class="recommendation-highlights">${highlightsHTML}</div>
            <div class="recommendation-details">${detailsHTML}</div>
            ${recommendation.detailPage ? `
                <div class="recommendation-actions">
                    <button class="view-details-btn" onclick="viewDetails('${recommendation.detailPage}')">
                        <i class="fas fa-eye"></i>
                        詳細を見る
                    </button>
                    <button class="book-now-btn" onclick="viewDetails('${recommendation.detailPage}')">
                        <i class="fas fa-credit-card"></i>
                        今すぐ予約
                    </button>
                </div>
            ` : ''}
        </div>
    `;
    
    return card;
}

// ヘルパー関数
function getSeasonText(season) {
    const seasons = {
        spring: '春',
        summer: '夏',
        autumn: '秋',
        winter: '冬'
    };
    return seasons[season] || season;
}

function getDestinationText(destination) {
    const destinations = {
        domestic: '国内',
        asia: 'アジア',
        europe: 'ヨーロッパ',
        america: 'アメリカ・南米',
        oceania: 'オセアニア',
        africa: 'アフリカ'
    };
    return destinations[destination] || destination;
}

function getBudgetText(budget) {
    const budgets = {
        low: '5万円以下',
        medium: '5万円-15万円',
        high: '15万円-30万円',
        luxury: '30万円以上'
    };
    return budgets[budget] || budget;
}

// 新しいヘルパー関数
function getDestinationImage(title) {
    // 旅行先に応じた背景画像のグラデーションを返す
    if (title.includes('京都') || title.includes('奈良')) {
        return 'linear-gradient(135deg, rgba(255, 182, 193, 0.8), rgba(255, 105, 180, 0.8)), url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><text y=\'50\' font-size=\'40\'>🌸</text></svg>")';
    } else if (title.includes('沖縄')) {
        return 'linear-gradient(135deg, rgba(135, 206, 235, 0.8), rgba(70, 130, 180, 0.8)), url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><text y=\'50\' font-size=\'40\'>🏖️</text></svg>")';
    } else if (title.includes('北海道')) {
        return 'linear-gradient(135deg, rgba(240, 248, 255, 0.8), rgba(176, 196, 222, 0.8)), url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><text y=\'50\' font-size=\'40\'>❄️</text></svg>")';
    } else if (title.includes('クロアチア')) {
        return 'linear-gradient(135deg, rgba(72, 187, 120, 0.8), rgba(56, 178, 172, 0.8)), url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><text y=\'50\' font-size=\'40\'>🏰</text></svg>")';
    }
    return 'linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8)), url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><text y=\'50\' font-size=\'40\'>🌟</text></svg>")';
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
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function showLoadingAnimation() {
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        検索中...
    `;
    submitBtn.disabled = true;
}

function hideLoadingAnimation() {
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.innerHTML = `
        <i class="fas fa-search"></i>
        おすすめの旅行先を探す
        <i class="fas fa-arrow-right"></i>
    `;
    submitBtn.disabled = false;
}

// View details function
function viewDetails(detailPage) {
    window.location.href = detailPage;
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // スムーズスクロールの設定
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // フォーム要素にアニメーション効果を追加
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            group.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Progress tracking
    setupProgressTracking();

    // Load saved theme
    loadTheme();
});

// Progress Tracking
function setupProgressTracking() {
    const formInputs = document.querySelectorAll('input[type="radio"]');
    const progressFill = document.getElementById('progressFill');
    const totalQuestions = 4; // season, budget, destination, travelType
    
    formInputs.forEach(input => {
        input.addEventListener('change', updateProgress);
    });
    
    function updateProgress() {
        const answeredQuestions = new Set();
        
        // Check each question group
        if (document.querySelector('input[name="season"]:checked')) {
            answeredQuestions.add('season');
        }
        if (document.querySelector('input[name="budget"]:checked')) {
            answeredQuestions.add('budget');
        }
        if (document.querySelector('input[name="destination"]:checked')) {
            answeredQuestions.add('destination');
        }
        if (document.querySelector('input[name="travelType"]:checked')) {
            answeredQuestions.add('travelType');
        }
        
        const progress = (answeredQuestions.size / totalQuestions) * 100;
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }
        
        // Add completion animation
        if (progress === 100) {
            setTimeout(() => {
                showNotification('すべての質問に回答いただきありがとうございます！', 'success');
            }, 500);
        }
    }
}

// Dark Mode Toggle
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeButton(newTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

function updateThemeButton(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('span');
        
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
            text.textContent = 'ライトモード';
        } else {
            icon.className = 'fas fa-moon';
            text.textContent = 'ダークモード';
        }
    }
}

// Loading Animation Functions
function showLoadingAnimation() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('active');
    }
}

function hideLoadingAnimation() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.remove('active');
    }
}

// Enhanced Notification System
function showNotification(message, type = 'info', duration = 3000) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after duration
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, duration);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

// Floating Action Button Functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showHelp() {
    const helpText = `
    📋 旅行AIアドバイザーの使い方：
    
    1. 希望する季節を選択してください
    2. 予算範囲を選んでください  
    3. 国内・海外の希望を選択してください
    4. 「おすすめを検索」ボタンを押してください
    
    ✨ あなたにぴったりの旅行先をAIが提案します！
    
    💡 各旅行先の詳細ページでは予約も可能です
    `;
    
    showNotification(helpText, 'info', 8000);
}

// Scroll to top button visibility
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }
});

// Add smooth scroll animation to all internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});
