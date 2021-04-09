require 'rails_helper'

RSpec.describe Room, type: :model do
  before do
    @room = FactoryBot.build(:room)
  end

  describe 'ルーム作成機能' do
    context 'ルーム作成ができる場合' do
      it 'nameが存在すれば登録できる' do
        expect(@room).to be_valid
      end
    end

    context 'ルーム作成ができない場合' do
      it 'nameが空では登録できない' do
        @room.name = ''
        @room.valid?
        expect(@room.errors.full_messages).to include('ルーム名を入力してください')
      end
    end
  end
end
