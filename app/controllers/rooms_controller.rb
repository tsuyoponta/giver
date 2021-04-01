class RoomsController < ApplicationController
  def index
  end

  def new
    @room = Room.new
  end

  def create
    @room = Room.new(room_params)
    if @room.save
      current_user.user_rooms.create(room_id: @room.id)
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def room_params
    params.require(:room).permit(:name)
  end
end
