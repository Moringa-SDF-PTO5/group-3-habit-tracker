from flask import Blueprint, request, jsonify
from .extensions import db
from .models import User, Habit, Progress, Reminder

api = Blueprint('api', __name__)

@api.route('/')
def home():
    return "Welcome to habit-tracker"

@api.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    if not data or not all(key in data for key in ('username', 'email', 'password')):
        return jsonify({'message': 'Invalid input'}), 400

    if User.query.filter_by(username=data['username']).first() or User.query.filter_by(email=data['email']).first():
        return jsonify({'message': 'Username or email already exists'}), 400

    new_user = User(username=data['username'], email=data['email'])
    new_user.set_password(data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.to_dict()), 201

@api.route('/habits', methods=['POST'])
def create_habit():
    data = request.get_json()
    if not data or not all(key in data for key in ('name', 'user_id')):
        return jsonify({'message': 'Invalid input'}), 400

    user = User.query.get(data['user_id'])
    if not user:
        return jsonify({'message': 'User not found'}), 404

    new_habit = Habit(name=data['name'], description=data.get('description', ''), user_id=data['user_id'])
    db.session.add(new_habit)
    db.session.commit()
    return jsonify(new_habit.to_dict()), 201

@api.route('/habits', methods=['GET'])
def get_habits():
    habits = Habit.query.all()
    return jsonify([habit.to_dict() for habit in habits]), 200

@api.route('/progress', methods=['POST'])
def create_progress():
    data = request.get_json()
    if not data or not all(key in data for key in ('date', 'status', 'habit_id')):
        return jsonify({'message': 'Invalid input'}), 400

    habit = Habit.query.get(data['habit_id'])
    if not habit:
        return jsonify({'message': 'Habit not found'}), 404

    new_progress = Progress(date=data['date'], status=data['status'], habit_id=data['habit_id'])
    db.session.add(new_progress)
    db.session.commit()
    return jsonify(new_progress.to_dict()), 201

@api.route('/reminders', methods=['POST'])
def create_reminder():
    data = request.get_json()
    if not data or not all(key in data for key in ('time', 'frequency', 'habit_id')):
        return jsonify({'message': 'Invalid input'}), 400

    habit = Habit.query.get(data['habit_id'])
    if not habit:
        return jsonify({'message': 'Habit not found'}), 404

    new_reminder = Reminder(time=data['time'], frequency=data['frequency'], habit_id=data['habit_id'])
    db.session.add(new_reminder)
    db.session.commit()
    return jsonify(new_reminder.to_dict()), 201


