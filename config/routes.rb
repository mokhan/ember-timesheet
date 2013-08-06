Timesheet::Application.routes.draw do
  root 'home#index'
  resources :users
  post 'login' => 'login#create'
end
