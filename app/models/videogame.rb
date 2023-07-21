class Videogame < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    validates :name, presence: true
    validates :developer, presence: true
    validates :release_date, presence: true
    validates :genre, presence: true
    validates :image_url, presence: true
    validates :platform, presence: true
end
