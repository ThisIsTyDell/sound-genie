class SongsController < ApplicationController

  def index
    songs = Song.all
    render json: songs
  end

  def show
    song = Song.find(params[:id])
    render json: song
  end

  def create
    song = current_user.songs.create(song_params)
  end

  private
    def song_params
      params.require(:song).permit(:name, :asset)
    end
  
end