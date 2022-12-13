from django.urls import path
from . import views

app_name = 'library_api'

urlpatterns = [
    # path('<int:pk>/', PostDetail.as_view(), name='detailcreate'),
    path('authors/', views.AuthorList.as_view()),
    path('authors/<int:pk>/', views.AuthorDetail.as_view()),
    path('customers/',views.CustomerList.as_view()),
    path('customers/<int:pk>/',views.CustomerDetail.as_view()),
    path('events/',views.EventList.as_view()),
    path('events/<int:pk>/',views.EventDetail.as_view()),

    path('books/',views.BookList.as_view()),
    path('books/<int:pk>/',views.BookDetail.as_view()),
    path('studyrooms/',views.StudyRoomList.as_view()),
    path('studyrooms/<int:pk>/',views.StudyRoomDetail.as_view()),
    path('copies/',views.CopyList.as_view()),
    path('copies/<int:pk>/',views.CopyDetail.as_view()),
    path('invitations/',views.InvitationList.as_view()),
    path('invitations/<int:pk>/',views.InvitationDetail.as_view()),
    path('reservations/',views.ReservationList.as_view()),
    path('reservations/<int:pk>/',views.ReservationDetail.as_view()),
    path('borrowings/',views.BorrowingList.as_view()),
    path('borrowings/<int:pk>/',views.BorrowingDetail.as_view()),
    path('invoices/',views.InvoiceList.as_view()),
    path('invoices/<int:pk>/',views.InvoiceDetail.as_view()),
    path('payments/',views.PaymentList.as_view()),
    path('payments/<int:pk>/',views.PaymentDetail.as_view()),
    
]