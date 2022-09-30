class SentenceSerializer < ActiveModel::Serializer
  attributes :id, :text

  has_many :entities
end
