class AddTagsToPortfolio < ActiveRecord::Migration
  class Portfolio < ActiveRecord::Base
    
  end
  
  def self.up
    add_column :portfolios, :tags, :text
  end

  def self.down
    drop_column :portfolios, :tags
  end
end
