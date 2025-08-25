# 🌟 旅行AIアドバイザー - Travel AI Advisor

> 日本語対応の旅行相談Webアプリケーション

![Travel AI](https://img.shields.io/badge/Travel-AI%20Advisor-blue)
![Language](https://img.shields.io/badge/Language-Japanese-red)
![Tech](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20JavaScript-green)

## 🚀 概要

旅行AIアドバイザーは、ユーザーの好みに基づいて最適な旅行先を提案するWebアプリケーションです。季節、予算、希望エリアを選択するだけで、パーソナライズされた旅行プランを提案します。

## ✨ 主な機能

- 🗾 **季節別旅行提案** - 春夏秋冬それぞれの最適な旅行先
- 💰 **予算別プラン** - 予算に応じた旅行プランの提案
- 🌏 **国内・海外対応** - 日本国内から海外まで幅広く対応
- 📱 **レスポンシブデザイン** - PC・タブレット・スマホ対応
- 🌙 **ダークモード** - 目に優しいダークテーマ
- 📋 **詳細ページ** - 各旅行先の詳細情報とスケジュール
- 💳 **予約システム** - オンライン予約・決済機能

## 🛠️ 技術スタック

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Design**: CSS Grid, Flexbox, CSS Variables
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Noto Sans JP)
- **Features**: Dark Mode, Responsive Design, Smooth Animations

## 📁 プロジェクト構造

```
travel-ai/
├── index.html                 # メインページ
├── assets/
│   ├── css/                   # スタイルシート
│   │   ├── styles.css
│   │   └── destination.css
│   └── js/                    # JavaScript
│       ├── script.js
│       └── destination.js
├── pages/
│   └── destinations/          # 旅行先詳細ページ
│       ├── kyoto-spring.html
│       ├── okinawa-summer.html
│       ├── nikko-autumn.html
│       └── sapporo-winter.html
└── backup/                    # バックアップファイル
```

## 🚀 セットアップ

### 前提条件
- Webブラウザ（Chrome、Firefox、Safari、Edge）
- ローカルサーバー（推奨）

### インストール

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/YOUR_USERNAME/travel-ai-advisor.git
   cd travel-ai-advisor
   ```

2. **ローカルサーバーで起動**
   
   **方法1: Live Server (VS Code)**
   - VS Codeでプロジェクトを開く
   - Live Server拡張機能をインストール
   - `index.html`を右クリック→"Open with Live Server"

   **方法2: Python簡易サーバー**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **方法3: Node.js**
   ```bash
   npx http-server
   ```

3. **ブラウザでアクセス**
   ```
   http://localhost:8000
   ```

## 🎯 使い方

1. **季節を選択** - 春、夏、秋、冬から希望の季節を選択
2. **予算を設定** - 予算重視、標準、高級から選択
3. **エリアを選択** - 国内または海外を選択
4. **検索実行** - "おすすめを検索"ボタンをクリック
5. **詳細確認** - 提案された旅行先の"詳細を見る"をクリック
6. **予約** - 気に入ったプランを予約

## 🔧 カスタマイズ

### 新しい旅行先を追加

`assets/js/script.js`のtravelDatabaseに新しいデータを追加:

```javascript
const travelDatabase = {
    spring: {
        domestic: {
            name: "新しい旅行先",
            location: "場所",
            image: "画像URL",
            price: "価格",
            duration: "期間",
            highlights: ["特徴1", "特徴2"],
            description: "説明",
            page: "pages/destinations/new-destination.html"
        }
    }
};
```

### スタイルのカスタマイズ

`assets/css/styles.css`のCSS変数を変更:

```css
:root {
    --bg-primary: your-gradient;
    --text-primary: your-color;
    /* その他の変数 */
}
```

## 🤝 コントリビューション

1. プロジェクトをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを作成

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 👨‍💻 開発者

- **GitHub**: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- **Email**: your.email@example.com

## 🙏 謝辞

- Font Awesome - アイコンライブラリ
- Google Fonts - Noto Sans JPフォント
- Unsplash - 美しい旅行写真

---

⭐ このプロジェクトが気に入ったらスターをお願いします!

日本語で作成された旅行相談ウェブアプリケーションです。ユーザーの好みに基づいて最適な旅行先を提案します。

## 機能

### 🎯 主な機能
- **個人の好み分析**: 季節、予算、旅行スタイル、目的地、期間、同行者の6つの要素を分析
- **カスタマイズされた提案**: ユーザーの入力に基づいて最適な旅行先を提案
- **詳細な旅行情報**: おすすめスポット、グルメ、アクティビティの詳細情報
- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **日本語UI**: 完全日本語対応のユーザーインターフェース

### 📋 質問項目
1. **希望する季節** - 春/夏/秋/冬
2. **予算** - 5万円以下/5-15万円/15-30万円/30万円以上
3. **旅行スタイル** - アドベンチャー/文化・歴史/リラクゼーション/グルメ/自然/都市部
4. **希望エリア** - 国内/アジア/ヨーロッパ/アメリカ・南米/オセアニア/アフリカ
5. **旅行期間** - 1-3日/4-7日/8-14日/15日以上
6. **同行者** - 一人旅/カップル・夫婦/家族/友人・グループ

## 技術仕様

### 🛠️ 使用技術
- **HTML5**: セマンティックマークアップ
- **CSS3**: 
  - フレックスボックス・グリッドレイアウト
  - グラデーション背景
  - ガラスモルフィズムエフェクト
  - レスポンシブデザイン
- **JavaScript (ES6+)**:
  - モジュラープログラミング
  - イベント駆動型プログラミング
  - データ構造管理
  - DOM操作

### 🎨 デザイン特徴
- **モダンUI**: グラデーション背景とガラス効果
- **Noto Sans JP フォント**: 日本語に最適化されたGoogle Fonts
- **カラーパレット**: 紫-青のグラデーション (#667eea → #764ba2)
- **アニメーション**: スムーズなトランジションとホバーエフェクト

## ファイル構成

```
travel-ai/
├── index.html          # メインHTMLファイル
├── styles.css          # スタイルシート
├── script.js           # JavaScript機能
└── README.md           # プロジェクト説明書
```

## 使用方法

### 🚀 クイックスタート
1. すべてのファイルを同じディレクトリに配置
2. `index.html` をウェブブラウザで開く
3. フォームに回答を入力
4. 「おすすめの旅行先を探す」ボタンをクリック
5. カスタマイズされた旅行提案を確認

### 💻 ローカル開発
```bash
# ディレクトリに移動
cd travel-ai

# 簡易サーバー起動 (Python 3)
python -m http.server 8000

# またはNode.js
npx serve .

# ブラウザでアクセス
# http://localhost:8000
```

## データベース構成

### 🗄️ 旅行先データ構造
```javascript
{
  season: {
    destination: {
      budget: [
        {
          title: "旅行先名",
          description: "詳細説明",
          highlights: ["特徴1", "特徴2"],
          details: {
            "おすすめスポット": ["スポット1", "スポット2"],
            "グルメ": ["料理1", "料理2"],
            "アクティビティ": ["活動1", "活動2"]
          }
        }
      ]
    }
  }
}
```

### 📊 現在のデータ範囲
- **季節**: 春、夏、秋、冬
- **エリア**: 国内、アジア、ヨーロッパ
- **予算帯**: 低予算～高予算
- **推奨先数**: 10+ 詳細な旅行提案

## カスタマイズ

### 🔧 新しい旅行先の追加
`script.js` の `travelDatabase` オブジェクトに新しいデータを追加:

```javascript
travelDatabase.season.destination.budget.push({
  title: "新しい旅行先",
  description: "説明文",
  highlights: ["特徴"],
  details: {
    "おすすめスポット": ["スポット"],
    "グルメ": ["料理"],
    "アクティビティ": ["活動"]
  }
});
```

### 🎨 スタイルのカスタマイズ
`styles.css` で以下の要素を変更可能:
- カラーパレット (CSS変数で管理)
- フォント設定
- レイアウト寸法
- アニメーション効果

### ⚙️ 機能の拡張
- 新しい質問項目の追加
- AI統合 (ChatGPT API等)
- 地図統合 (Google Maps API)
- 予約システム連携
- 多言語対応

## ブラウザ対応

### ✅ 対応ブラウザ
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### 📱 モバイル対応
- iOS Safari 13+
- Chrome Mobile 80+
- Samsung Internet 10+

## 今後の改善予定

### 🔮 機能拡張
- [ ] AI機械学習による推奨精度向上
- [ ] 実際の旅行予約システム連携
- [ ] ユーザーレビューシステム
- [ ] ソーシャル共有機能
- [ ] 多言語対応 (英語、韓国語、中国語)
- [ ] オフライン対応 (PWA)

### 🎯 UX改善
- [ ] より詳細な質問項目
- [ ] 写真ギャラリー統合
- [ ] インタラクティブマップ
- [ ] 価格比較機能
- [ ] 天気情報統合

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## お問い合わせ

プロジェクトに関するご質問やご提案がございましたら、お気軽にお声がけください。

---

**Made with ❤️ for travelers who love Japan**
