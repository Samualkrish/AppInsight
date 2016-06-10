from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS

import requests

app = Flask(__name__)
api = Api(app)
CORS(app)

class SMTP(Resource):
	def get(self,command):
		return {'hi':'hi'}

	def post(self,command):
		return {'hi':'hi'}


