class AddCompleteToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :complete, :boolean
  end
end
