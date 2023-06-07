class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        render json: user, status: 201
    end

    def index
        users = User.all
        render json: users, status: 200
    end

    def show
        user = find_user
        render json: user, status: 200
    end

    def update
        user = find_user
        user.update(user_params)
        render json: user, status: 202
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content
    end

    private

    def find_user
        User.find_by(id: params[:id])
    end

    def user_params
        params.permit(:name, :password, :age)
    end
end
