class JokesController < ApplicationController

    def index
        @jokes = Joke.all
    
        render json: @jokes.to_json(include: [:user]), status: 200
    end

    def show
      @joke = Joke.find_by(id: params[:id])
  
      if @joke
        render json: @joke, status: 200
      else
        render json: {error: "joke not found"}, status: 404
      end
    end
  
    def create
  
      @joke = Joke.new(joke_params)
      @user = User.find_by(name: params[:name])
  
      if @joke
        @joke.user = @user
      else
        @user = User.create!(name: params[:name])
        @joke.user = @user
        @user.jokes << @joke
      end
  
      if @joke.save
        render json: @joke, status: 200
      end
    end
  
    def update
      @joke = Joke.find_by(name: params[:name])
      @Joke.update(joke_params)
  
      render json: @joke, status: 200
    end
  
    private
  
    def joke_params
      params.require(:joke).permit(:user_id, :phrase, :punchline)
    end

end
