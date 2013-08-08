Clockwork::Application.routes.draw do
  root 'home#index'
  resources :users, only: [:index, :create]
  resources :sessions, only: [:create, :show, :destroy]
  resources :timesheets, only: [:index]
end
