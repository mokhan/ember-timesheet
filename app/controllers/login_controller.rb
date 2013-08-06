class LoginController < ApplicationController

  def create
    email = params[:email]
    if email == 'mo@example.com' && params[:password] == 'password'
      render json: { session: { id: 1, email: email }, status: :created }
    else
      render json: { errors: { email: "invalid email or password" }, status: :unprocessable_entity }
    end
  end
end
