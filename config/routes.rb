Rails.application.routes.draw do
  devise_for :users
  resources :comments
  resources :posts
  get 'index' => 'practice#index'

  post 'index' => 'practice#index'

  get 'about' => 'practice#about'

  get 'users_posts' => 'posts#users_posts'

  root 'posts#index'

  get '/:name' => 'posts#users_posts', as: :user_posts

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end