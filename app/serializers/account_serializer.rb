class AccountSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :label_name, :credits
end
