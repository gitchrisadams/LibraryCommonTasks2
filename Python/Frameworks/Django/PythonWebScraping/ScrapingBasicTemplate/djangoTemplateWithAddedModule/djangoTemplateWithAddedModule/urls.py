from django.conf.urls import include, url
from django.contrib import admin

# Import the view:
from . import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.home),
    url(r'^about', views.about),
    url(r'', 'addedModule.views.addedModule')

]
