class AddCreditsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :credits, :integer
  end
end
