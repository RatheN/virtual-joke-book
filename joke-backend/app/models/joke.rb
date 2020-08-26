class Joke < ApplicationRecord
  belongs_to :user


  def self.jokelist
    # Create an empty hash
    all_jokes = {}

    # Iterate over each game as a key/value pair with it's id as the key and the score as the value
    Joke.all.each do |joke|
      all_jokes[joke.id] = joke.id
    end

    # Sort the hash by value (low to high) then reverse if (high to low)
    sorted_jokes = all_jokes.sort_by{|k,v| v}.reverse

    # Get just the ids of those games, in order (high to low)
    just_ids = sorted_jokes.to_h.keys

    sorted_jokes = []

    # Find each game object and add it to an array
    # TODO: Use map!
    just_ids.each do |id|
      sorted_jokes << Joke.find_by_id(id)
    end

    # Return the array of games, sorted by score (high to low)
    sorted_jokes
  end
end
