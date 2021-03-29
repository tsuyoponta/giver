# データベース設計

## users テーブル

| Column             | Type    | Options                   |
| ------------------ | ------- | ------------------------- |
| nickname           | string  | null: false               |
| email              | string  | null: false, unique: true |
| encrypted_password | string  | null: false               |

### Association

- has_many :rooms, through: user_rooms
- has_many :messages

## user_rooms テーブル

| Column | Type       | Options           |
| ------ | ---------- | ----------------- |
| user   | references | foreign_key: true |
| room   | references | foreign_key: true |

### Association

- belongs_to :user
- belongs_to :room

## rooms テーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| name   | string | null: false |

### Association

- has_many :users, through: user_rooms
- has_many :messages

## messages テーブル

| Column   | Type       | Options           |
| -------- | ---------- | ----------------- |
| content  | string     | null: false       |
| user     | references | foreign_key: true |
| room     | references | foreign_key: true |

### Association

- belongs_to :user
- belongs_to :room