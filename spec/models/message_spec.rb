require 'rails_helper'

RSpec.describe Message, type: :model do
  before do
    @message = FactoryBot.build(:message)
  end

  describe "チャット機能" do
    context "メッセージが保存できる場合" do
      it "contentが存在すれば保存できる" do
        binding.pry
        expect(@message).to be_valid
      end
    end

    context "メッセージが保存できない場合" do
      it "contentが空では保存できない" do
        @message.content = ""
        @message.valid?
        expect(@message.errors.full_messages).to include("メッセージを入力してください")
      end
    end
  end
end
