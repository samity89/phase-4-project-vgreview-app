class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include: :reviews, status: 200
    end
    
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, include: :reviews, status: 201
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user, status: 200
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def update
        user = find_user
        user.update(user_params)
        render json: user, status: 202
    end

    def destroy
        user = find_user
        user.destroy
        render json: {}
    end

    private

    def find_user
        User.find_by(id: params[:id])
    end

    def user_params
        params.permit(:username, :password, :age)
    end
end
