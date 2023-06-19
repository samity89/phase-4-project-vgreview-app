class ReviewsController < ApplicationController
    
    def index
        reviews = Review.all
        render json: reviews, include: 
            [:videogame => {:only =>[:id, :name, :image_url, :platform, :release_date]}, 
            :user => {:only =>[:id, :username]}], 
            status: 200
    end

    def show
        review = find_review
        render json: review, status: 200
    end

    def create
        review = Review.create(review_params)
        render json: review, include: 
        [:videogame => {:only =>[:id, :name, :image_url, :platform, :release_date]}, 
        :user => {:only =>[:id, :username]}], 
        status: 201
    end

    def update
        review = find_review
        review.update(body: params[:body])
        render json: review, include: 
            [:videogame => {:only =>[:id, :name, :image_url, :platform, :release_date]}, 
            :user => {:only =>[:id, :username]}], 
            status: 202
    end

    def destroy
        review = find_review
        review.destroy
        render json: {}
    end

    private

    def find_review
        Review.find_by(id: params[:id])
    end

    def review_params
        params.permit(:title, :user_id, :videogame_id, :rating, :body)
    end

end
