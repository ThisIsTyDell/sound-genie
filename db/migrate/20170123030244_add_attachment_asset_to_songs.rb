class AddAttachmentAssetToSongs < ActiveRecord::Migration
  def self.up
    change_table :songs do |t|
      t.attachment :asset
    end
  end

  def self.down
    remove_attachment :songs, :asset
  end
end
