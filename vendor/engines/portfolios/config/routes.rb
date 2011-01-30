Refinery::Application.routes.draw do
  resources :portfolios

  scope(:path => 'refinery', :as => 'admin', :module => 'admin') do
    resources :portfolios do
      collection do
        post :update_positions
      end
    end
  end
end
