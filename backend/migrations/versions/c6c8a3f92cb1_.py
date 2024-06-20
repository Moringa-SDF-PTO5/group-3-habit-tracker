"""empty message

Revision ID: c6c8a3f92cb1
Revises: 
Create Date: 2024-06-20 20:56:39.892276

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c6c8a3f92cb1'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # Before creating tables, ensure any previous versions are dropped
    op.drop_table('habit', cascade=True)
    op.drop_table('progress', cascade=True)
    op.drop_table('reminder', cascade=True)
    op.drop_table('user', cascade=True)

    # Create new tables
    op.create_table('user',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('username', sa.String(length=80), nullable=False),
        sa.Column('email', sa.String(length=120), nullable=False),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('email'),
        sa.UniqueConstraint('username')
    )
    op.create_table('habit',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(length=100), nullable=False),
        sa.Column('description', sa.Text(), nullable=True),
        sa.Column('user_id', sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_table('progress',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('habit_id', sa.Integer(), nullable=False),
        sa.Column('date', sa.Date(), nullable=False),
        sa.ForeignKeyConstraint(['habit_id'], ['habit.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reminder',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('habit_id', sa.Integer(), nullable=False),
        sa.Column('reminder_time', sa.Time(), nullable=False),
        sa.ForeignKeyConstraint(['habit_id'], ['habit.id'], ),
        sa.PrimaryKeyConstraint('id')
    )



def downgrade():
    pass
