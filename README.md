# EyeDrop Logger (点眼記録アプリ)

## アプリ概要
- 1日3回（朝・昼・夜）点眼する目薬の記録・リマインドアプリ
- 「点眼した！」ボタンでローカルに記録
- 記録履歴・通知・スケジュール編集・オフライン対応

## 技術スタック
- Expo (React Native, TypeScript)
- 状態管理: Recoil + Recoil Sync
- ストレージ: expo-sqlite or async-storage
- プッシュ通知: expo-notifications
- UI: React Native Paper
- テスト: Jest, React Native Testing Library

## ディレクトリ構成（予定）
```
/app
  /components
  /screens
  /hooks
  /services
  App.tsx
/test
```

## 開発ルール
- Airbnb TypeScript コーディング規約
- strict 型オプション
- コメントは日本語

---

このディレクトリにExpoプロジェクトを初期化してください。
