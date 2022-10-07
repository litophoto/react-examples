from django.urls import path, include
from rest_framework import routers

from .views import TodoViewSet


todo_router = routers.DefaultRouter()
todo_router.register('todos', TodoViewSet)
urlpatterns = [
    path('', include(todo_router.urls)),
]