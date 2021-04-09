class MessagesController < ApplicationController
  def index
    @message = Message.new
    @room = Room.find(params[:room_id])
    @messages = @room.messages.includes(:user)
  end

  def create
    @room = Room.find(params[:room_id])
    @message = @room.messages.new(message_params)
    return unless @message.save

    ActionCable.server.broadcast 'message_channel', content: @message.content, user: @message.user.nickname,
                                                    time: @message.created_at.strftime('%Y/%m/%d %H:%M:%S')
  end

  private

  def message_params
    params.require(:message).permit(:content).merge(user_id: current_user.id)
  end
end
