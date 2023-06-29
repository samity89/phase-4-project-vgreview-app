class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :videogame_id, :rating, :body, :user
  belongs_to :videogame
  belongs_to :user, only: :username
end
