class LoginController < ApplicationController
  def create
    email = params[:email]
    if email == 'mo@example.com' && params[:password] == 'password'
      render json: { session: { id: 1, email: email }, status: :created }
    else
      render :nothing => true, :status => :unauthorized
    end
  end
end
