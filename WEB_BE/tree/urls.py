from django.contrib import admin
from django.urls import path

from accounts import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.LoginView.as_view()),
    path('profile/', views.ProfileView.as_view()),
]
