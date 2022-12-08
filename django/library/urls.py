from django.urls import path
from django.views.generic import TemplateView

app_name = 'library'

urlpatterns = [
    path('', TemplateView.as_view(template_name = "library/index.html")),
]