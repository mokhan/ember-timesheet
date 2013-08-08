class TimesheetsController < ApplicationController
  respond_to :json

  def index
    respond_with current_user.timesheets
  end
end
