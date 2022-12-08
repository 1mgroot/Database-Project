from django.urls import path
from . import views

app_name = 'library_api'

urlpatterns = [
    # path('<int:pk>/', PostDetail.as_view(), name='detailcreate'),
    path('authors/', views.AuthorList.as_view()),
    path('authors/<int:pk>/', views.AuthorDetail.as_view()),
]