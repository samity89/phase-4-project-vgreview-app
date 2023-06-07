class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.integer :user_id
      t.integer :videogame_id
      t.integer :rating
      t.text :body

      t.timestamps
    end
  end
end
