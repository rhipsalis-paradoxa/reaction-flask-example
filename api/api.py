import time
from flask import Flask, request

menu = {
    'truffles': 20.00,
    'sugar': 0.90,
    'mustard': 1.50,
    'avocado': 9.00,
    'latte': 16.00,
}


app = Flask(__name__)

@app.route('/hi', methods=['POST'])
def get_current_time():
    print('got request:', request.get_json())
    order = request.get_json()['order']
    price = menu[order]
    print('order:', order, 'price:', price)
    return {'price': price}
