class RemoveCreditsFromUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :credits, :string
  end
end
