from django.urls import include, path,re_path
from home import views


urlpatterns=[
    re_path('',views.home,name='home'),
]