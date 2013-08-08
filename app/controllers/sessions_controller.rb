class SessionsController < ApplicationController
  respond_to :json

  def create
    user = User.find_by(:email => params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      render json: user, serializer: SessionSerializer
    else
      render :nothing => true, :status => :unauthorized
    end
  end

  def show
    user = current_user
    if user
      render json: user, serializer: SessionSerializer
    else
      render nothing: true, :status => :unauthorized
    end
  end

  def destroy
    session[:user_id] = nil
    render json: {}, status: :accepted
  end
end
