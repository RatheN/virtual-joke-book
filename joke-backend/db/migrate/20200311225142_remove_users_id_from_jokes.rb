class RemoveUsersIdFromJokes < ActiveRecord::Migration[6.0]
  def change

    remove_column :jokes, :users_id, :bigint
  end
end
