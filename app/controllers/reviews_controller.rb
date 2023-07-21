class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    
    def index
        reviews = Review.all
        render json: reviews, status: 200
    end

    def show
        review = find_review
        render json: review, include: :user, status: 200
    end

    def create
        review = Review.create(review_params)
        render json: review, status: 201
    end

    def update
        review = find_review
        review.update(review_params)
        render json: review, status: 202
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
        params.permit(:title, :user_id, :videogame_id, :rating, :body, :videogame)
    end

end
