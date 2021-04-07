class MessagesController < ApplicationController
  def index
    @message = Message.new
    @room = Room.find(params[:room_id])
    @messages = @room.messages.includes(:user)
  end

  def create
    @room = Room.find(params[:room_id])
    @message = @room.messages.new(message_params)
    @user = User.find_by(id: current_user.id)
    if @message.save
      ActionCable.server.broadcast "message_channel", content: @message, user: @user
    end
  end

  private

  def message_params
    params.require(:message).permit(:content).merge(user_id: current_user.id)
  end
end
