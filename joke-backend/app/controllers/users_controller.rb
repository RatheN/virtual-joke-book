class UsersController < ApplicationController
    def index
        @users = User.all
    
        render json: @users.to_json(include: [:games]), status: 200
      end
end
