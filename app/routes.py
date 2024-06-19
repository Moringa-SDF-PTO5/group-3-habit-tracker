from flask import Blueprint, request, jsonify
from .extensions import db
from .models import User, Habit, Progress, Reminder

api = Blueprint('api', __name__)

@api.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(username=data['username'], email=data['email'])
    new_user.set_password(data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'}), 201

@api.route('/habits', methods=['POST'])
def create_habit():
    data = request.get_json()
    new_habit = Habit(name=data['name'], description=data['description'], user_id=data['user_id'])
    db.session.add(new_habit)
    db.session.commit()
    return jsonify({'message': 'Habit created successfully'}), 201

@api.route('/habits', methods=['GET'])
def get_habits():
    habits = Habit.query.all()
    return jsonify([habit.to_dict() for habit in habits]), 200

@api.route('/progress', methods=['POST'])
def create_progress():
    data = request.get_json()
    new_progress = Progress(date=data['date'], status=data['status'], habit_id=data['habit_id'])
    db.session.add(new_progress)
    db.session.commit()
    return jsonify({'message': 'Progress created successfully'}), 201

@api.route('/reminders', methods=['POST'])
def create_reminder():
    data = request.get_json()
    new_reminder = Reminder(time=data['time'], frequency=data['frequency'], habit_id=data['habit_id'])
    db.session.add(new_reminder)
    db.session.commit()
    return jsonify({'message': 'Reminder created successfully'}), 201
