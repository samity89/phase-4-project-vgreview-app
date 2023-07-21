class Review < ApplicationRecord
    belongs_to :user
    belongs_to :videogame
    validates :title, presence: true
    validates :user_id, presence: true
    validates :videogame_id, presence: true
    validates :rating, presence: true
    validates :body, presence: true
end
