class CreateVideogames < ActiveRecord::Migration[7.0]
  def change
    create_table :videogames do |t|
      t.string :name
      t.string :developer
      t.date :release_date
      t.string :genre
      t.string :image_url
      t.string :platform

      t.timestamps
    end
  end
end
