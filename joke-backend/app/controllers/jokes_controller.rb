class JokesController < ApplicationController

    def index
        @jokes = Joke.all
    
        render json: @jokes.to_json(include: [:user]), status: 200
      end

end
