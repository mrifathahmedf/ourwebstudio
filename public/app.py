from flask import Flask, request, jsonify, render_template
from googletrans import Translator

app = Flask(__name__)
translator = Translator()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.get_json()
    text = data.get("text")
    target_lang = data.get("target_lang")

    if not text or not target_lang:
        return jsonify({"error": "Missing text or target language"}), 400

    translated_text = translator.translate(text, dest=target_lang).text
    return jsonify({"translated_text": translated_text})

if __name__ == '__main__':
    app.run(debug=True)