from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import AzureOpenAI
import re

app = Flask(__name__)
CORS(app)

api_version = "2023-07-01-preview"
endpoint = "https://llm-proxy.us-east-2.int.infra.intelligence.webex.com/azure/v1"

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    prompt = data.get('prompt')
    
    if not prompt:
        return jsonify({"error": "No prompt provided"}), 400
    
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return jsonify({"error": "No Bearer token provided"}), 401
    
    api_key = auth_header.split(' ')[1]
    
    conditions = "send me svg code. should be simple icon style. no extra details is required. height and width is 200. the following description: "
    conditions2 = ". send only the code as plain text. do not include any other text in the response."
    prompt = str(conditions) + str(prompt) + str(conditions2)
    
    client = AzureOpenAI(
        api_version=api_version,
        azure_endpoint=endpoint,
        api_key=api_key
    )
    
    completion = client.chat.completions.create(
        model="gpt-35-turbo",
        messages=[
            {
                "role": "user",
                "content": prompt,
            },
        ],
    )
    completion_dict = completion.model_dump()
    content = completion_dict['choices'][0]['message']['content']
    
    
    
    # Regular expression to match and extract the SVG content
    svg_pattern = re.compile(r'<svg[^>]*>.*?</svg>', re.DOTALL)
    match = svg_pattern.search(content)

    if match:
        svg_content = match.group(0)
    else:
        svg_content = 'ERROR'

    response = {
        'content': svg_content,
    }
    return jsonify(response);

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)