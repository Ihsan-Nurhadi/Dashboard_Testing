from . import views
from django.urls import path


urlpatterns = [
    path('',views.index, name='index'),
    path('send/', views.send_mqtt, name='send_mqtt'),
    path("api/test/", views.test_api, name="test_api"),
]