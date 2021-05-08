from flask import Flask, request, jsonify
import json

app = Flask(__name__)
LEADERBOARD_FILE = 'data/lb.json'


def read_leaderboard():
    try:
        with open(LEADERBOARD_FILE, 'r') as f:
            return json.load(f)
    except Exception:
        return {}


def write_leaderboard(data):
    with open(LEADERBOARD_FILE, 'w') as f:
        json.dump(data, f)


@app.route('/record', methods=['POST'])
def record():
    lb = read_leaderboard()
    data = request.json
    lb[data['id']] = {'bytes': data['bytes'], 'name': data['name']}
    write_leaderboard(lb)
    return 'ok'


@app.route('/lb')
def lb():
    return jsonify(list(read_leaderboard().values()))


@app.route('/')
def ok():
    return 'ok'


def main():
    app.run('0.0.0.0')


if __name__ == '__main__':
    main()
