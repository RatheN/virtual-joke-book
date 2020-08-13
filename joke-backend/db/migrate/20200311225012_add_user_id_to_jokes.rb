class AddUserIdToJokes < ActiveRecord::Migration[6.0]
  def change
    add_column :jokes, :user_id, :integer
  end
end
