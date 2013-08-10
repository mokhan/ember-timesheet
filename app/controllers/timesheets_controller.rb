class TimesheetsController < ApplicationController
  respond_to :json

  def index
    respond_with current_user.timesheets
  end

  def show
    timesheet = current_user.timesheets.find(params[:id])
    respond_with timesheet
  end

  def create
    timesheet = current_user.timesheets.create(timesheet_params)
    render json: timesheet
  end

  private

  def timesheet_params
    params.require(:timesheet).permit(:name)
  end
end
