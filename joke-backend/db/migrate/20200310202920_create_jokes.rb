class CreateJokes < ActiveRecord::Migration[6.0]
  def change
    create_table :jokes do |t|
      t.string :phrase
      t.string :punchline
      t.references :users, null: false, foreign_key: true
      t.boolean :favorite

      t.timestamps
    end
  end
end
