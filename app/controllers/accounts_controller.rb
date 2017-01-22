class AccountsController < ApplicationController
  def show
    account = Account.find_by(user_id: current_user.id)
    render json: account
  end

  def create
    account = Account.find_by(user_id: current_user.id)
    account.create(params[:AccountCtrl])
  end

  def update
    account = Account.find_by(user_id: current_user.id)
    account.update(params[:data])
  end

  private

  def post_params
    params.permit(:first_name, :last_name, :label_name, :credits)
  end
end
