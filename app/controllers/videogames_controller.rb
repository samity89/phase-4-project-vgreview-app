class VideogamesController < ApplicationController
    def index
        videogames = Videogame.all
        render json: videogames, status: 200
    end

    def show
        videogame = find_videogame
        render json: videogame, status: 200
    end

    def create
        videogame = Videogame.create(videogame_params)
        render json: videogame, status: 201
    end

    def update
        videogame = find_videogame
        videogame.update(videogame_params)
        render json: videogame, status: 202
    end

    def destroy
        videogame = find_videogame
        videogame.destroy
        head :no_content
    end

    private

    def videogame_params
        params.permit(:name, :developer, :release_date, :genre, :image_url, :platform)
    end

    def find_videogame
        Videogame.find_by(id: params[:id])
    end
    
end
