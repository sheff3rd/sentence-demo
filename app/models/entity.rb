class Entity < ApplicationRecord
  self.inheritance_column = nil

  belongs_to :sentence

  enum type: %i[ORG GPE MONEY THEME TIME]

  validates :text, :type, presence: true
end
