# 旅行AIアドバイザー - プロジェクト構造

## 📁 フォルダ構造

```
travel-ai/
├── 📄 index.html                    # メインページ（ホーム）
├── 📄 package.json                  # プロジェクト設定
├── 📄 README.md                     # プロジェクト説明
├── 
├── 📂 assets/                       # 静的ファイル
│   ├── 📂 css/                      # スタイルシート
│   │   ├── 📄 styles.css            # メインスタイル
│   │   ├── 📄 destination.css       # 詳細ページスタイル
│   │   └── 📄 insurance-styles.css  # 保険スタイル（未使用）
│   │
│   └── 📂 js/                       # JavaScript
│       ├── 📄 script.js             # メイン機能
│       └── 📄 destination.js        # 詳細ページ機能
│
├── 📂 pages/                        # ページファイル
│   └── 📂 destinations/             # 旅行先詳細ページ
│       ├── 📄 kyoto-spring.html     # 京都（春）
│       ├── 📄 okinawa-summer.html   # 沖縄（夏）
│       ├── 📄 nikko-autumn.html     # 日光（秋）
│       └── 📄 sapporo-winter.html   # 札幌（冬）
│
└── 📂 backup/                       # バックアップファイル
    ├── 📄 script-old.js             # 旧スクリプト
    └── 📄 script-simple.js          # 簡単版スクリプト
```

## 🚀 開発開始

1. **プロジェクトを開く**
   ```bash
   cd travel-ai
   ```

2. **ブラウザで確認**
   - `index.html` をブラウザで開く

## 📁 ファイル説明

### 🏠 メインページ
- **`index.html`** - トップページ、旅行検索フォーム

### 🎨 スタイル（assets/css/）
- **`styles.css`** - メインデザイン、フォーム、レスポンシブ
- **`destination.css`** - 詳細ページ専用スタイル
- **`insurance-styles.css`** - 保険機能用（現在未使用）

### ⚡ スクリプト（assets/js/）
- **`script.js`** - フォーム処理、旅行データベース、UI制御
- **`destination.js`** - 詳細ページの予約機能

### 📄 旅行先ページ（pages/destinations/）
- **`kyoto-spring.html`** - 京都の春旅行プラン
- **`okinawa-summer.html`** - 沖縄の夏ビーチリゾート
- **`nikko-autumn.html`** - 日光の秋紅葉狩り
- **`sapporo-winter.html`** - 札幌の冬雪まつり

### 🗄️ バックアップ（backup/）
- 開発中の旧バージョンファイル

## 🛠️ 開発メモ

### 機能一覧
- ✅ 季節・予算・エリア選択
- ✅ 旅行先おすすめ表示
- ✅ 詳細ページ遷移
- ✅ 予約・決済システム
- ✅ ダークモード
- ✅ レスポンシブデザイン
- ❌ 保険おすすめ（削除済み）

### 技術スタック
- **HTML5** - セマンティックマークアップ
- **CSS3** - グリッド、フレックスボックス、アニメーション
- **JavaScript ES6+** - モジュラー設計
- **Font Awesome** - アイコン
- **Google Fonts** - 日本語フォント（Noto Sans JP）

## 🔄 更新履歴

- **v1.0** - 基本機能実装
- **v1.1** - 保険機能追加
- **v1.2** - 保険機能削除、シンプル化
- **v1.3** - フォルダ構造整理（現在）

---

*📧 質問があれば気軽にお聞きください！*
