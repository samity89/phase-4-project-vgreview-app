class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    private
    def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end
    
    def render_unprocessable_entity_response(invalid)
        flash.now[:alert] = invalid.record.errors.full_messages.to_sentence
    end

  end
