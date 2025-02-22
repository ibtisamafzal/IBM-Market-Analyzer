from flask import Flask
from flask_cors import CORS
from app.routes.news_routes import bp as news_bp

def create_app():
    app = Flask(__name__)
    CORS(app, resources={
        r"/api/*": {
            "origins": ["http://localhost:3000"],
            "methods": ["GET", "POST", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization"]
        }
    })

    # Register Blueprints with /api prefix
    app.register_blueprint(news_bp, url_prefix='/api/news')

    @app.route('/')
    def home():
        return "Flask API is running!"

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)