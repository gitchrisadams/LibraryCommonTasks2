from django.conf.urls import include, url
from django.contrib import admin

# Import the view:
from .views import welcome

# url(r'^$', welcome) matches empty string so localhost:8000 goes to welcome page.
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', welcome),
    url(r'', 'addedModule.views.addedModule')
]
