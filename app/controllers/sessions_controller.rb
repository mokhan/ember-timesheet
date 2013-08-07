class SessionsController < ApplicationController
  respond_to :json

  def create
    user = User.find_by(:email => params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      render json: { session: { id: user.id, email: user.email } }
    else
      render :nothing => true, :status => :unauthorized
    end
  end

  def show
    user = current_user
    if user
      render json: { session: { id: user.id, email: user.email } }
    else
      render nothing: true, :status => :unauthorized
    end
  end

  def destroy
    session[:user_id] = nil
    render json: {}, status: :accepted
  end
end
