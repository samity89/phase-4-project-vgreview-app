class VideogamesController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    def index
        videogames = Videogame.all
        render json: videogames, include: ['reviews', 'reviews.user'], status: 200
    end

    def show
        videogame = find_videogame
        render json: videogame, include: ['reviews', 'reviews.user'], status: 200
    end
    
    def create
        videogame = Videogame.create(videogame_params)
        render json: videogame, include: ['reviews', 'reviews.user' ], status: 201
    end

    def update
        videogame = find_videogame
        videogame.update(videogame_params)
        render json: videogame, include: ['reviews', 'reviews.user' ], status: 202
    end

    def destroy
        videogame = find_videogame
        videogame.destroy
        render json: {}
    end

    private

    def videogame_params
        params.permit(:id, :name, :developer, :release_date, :genre, :image_url, :platform, :reviews)
    end

    def find_videogame
        Videogame.find_by(id: params[:id])
    end

    # def average_rating
    #     videogame = find_videogame
    #     values = Videogame.group(:reviews).average(:rating)
    #     render json: values
    # end
    
end
