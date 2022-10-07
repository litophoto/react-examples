from rest_framework import serializers

from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    # TODO: Add Readonly uuid field
    # id = 
    class Meta:
        model = Todo
        fields = ['id', 'title', 'completed']