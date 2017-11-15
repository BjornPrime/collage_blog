class Post < ApplicationRecord
  mount_uploader :image, PostImageUploader

  has_many :comments
  belongs_to :user

  paginates_per 3
end
