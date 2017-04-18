# Import flask library:
from flask import Flask

app = Flask(__name__)

# Define a route:
@app.route('/')
def index():
    return "hello flask"

# Run the app:
if __name__ == "__main__":
    app.run()