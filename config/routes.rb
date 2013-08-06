Timesheet::Application.routes.draw do
  root 'home#index'
  resources :users
end
