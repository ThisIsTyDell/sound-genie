Rails.application.routes.draw do
  get 'accounts/show'

  devise_for :users
  root 'application#index'

  resources :songs, only: [:show, :index]
  resources :users, only: [:show]

end
