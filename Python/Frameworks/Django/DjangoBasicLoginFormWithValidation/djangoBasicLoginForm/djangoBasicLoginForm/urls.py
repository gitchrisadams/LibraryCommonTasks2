from django.contrib import admin
from django.http import HttpResponse
from django.urls import path, include
from django.views.generic.base import TemplateView
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('register/', views.register, name='register'),
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
]
