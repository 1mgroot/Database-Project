from rest_framework import generics
from library.models import Author, Customer, Event,Book,StudyRoom,Copy,Invitation,Reservation,Borrowing,Invoice,Payment
from .serializers import AuthorSerializer, CustomerSerializer, EventSerializer,BookSerializer,StudyRoomSerializer,CopySerializer,InvitationSerializer,ReservationSerializer,BorrowingSerializer,InvoiceSerializer,PaymentSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class AuthorList(ListCreateAPIView):
    serializer_class = AuthorSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        queryset = Author.objects.all()
        return queryset
        
class AuthorDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()

class CustomerList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CustomerSerializer
    
    def get_queryset(self):
        return Customer.objects.all()

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()

class EventList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = EventSerializer
    def get_queryset(self):
        return Event.objects.all()

class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = EventSerializer
    queryset = Event.objects.all()




# @api_view(['GET'])
# def getAuthorList(request):
#     authors = LibraryAuthor.objects.all()
#     serializer = AuthorSerializer(authors,many=True)
#     return Response(serializer.data)

# @api_view(['POST'])
# def addAuthor(request):
#     author = AuthorSerializer(data=request.data)

#     if author.is_valid():
#         author.save()
#         return Response(author.data)
#     else:
#         return Response(status=status.HTTP_404_NOT_FOUND)


class StudyRoomList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = StudyRoomSerializer
    def get_queryset(self):
        return StudyRoom.objects.all()

class StudyRoomDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = StudyRoomSerializer
    queryset = StudyRoom.objects.all()

class BookList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = BookSerializer
    def get_queryset(self):
        return Book.objects.all()

class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = BookSerializer
    queryset = Book.objects.all()

class CopyList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CopySerializer
    def get_queryset(self):
        book = self.request.query_params.get('book')
        if book is not None:
            queryset = queryset.filter(book = book )
        return queryset

class CopyDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CopySerializer
    queryset = Copy.objects.all()

class InvitationList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = InvitationSerializer
    def get_queryset(self):
        queryset= Invitation.objects.all()
        author = self.request.query_params.get('author')
        if author is not None:
            queryset = queryset.filter(author = author )
        return queryset

        event = self.request.query_params.get('event')
        if event is not None:
            queryset = queryset.filter(event = event )
        return queryset

class InvitationDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = InvitationSerializer
    queryset = Invitation.objects.all()

class ReservationList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = ReservationSerializer
    def get_queryset(self):
        queryset= Reservation.objects.all()
        customer = self.request.query_params.get('customer')
        if customer is not None:
            queryset = queryset.filter(customer = customer )
        return queryset

        room = self.request.query_params.get('room')
        if room is not None:
            queryset = queryset.filter(room=room )
        return queryset

class ReservationDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = ReservationSerializer
    queryset = Reservation.objects.all()

class BorrowingList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = BorrowingSerializer
    def get_queryset(self):
        customer = self.request.query_params.get('customer')
        if customer is not None:
            queryset = queryset.filter(customer = customer )
        return queryset

        copy = self.request.query_params.get('copy')
        if copy is not None:
            queryset = queryset.filter(copy = copy )
        return queryset

class BorrowingDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = BorrowingSerializer
    queryset = Borrowing.objects.all()

class PaymentList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = PaymentSerializer
    def get_queryset(self):
        return Payment.objects.all()

class PaymentDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = PaymentSerializer
    queryset = Payment.objects.all()

class InvoiceList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = InvoiceSerializer
    def get_queryset(self):
        borrowing = self.request.query_params.get('borrowing')
        if borrowing is not None:
            queryset = queryset.filter(borrowing = borrowing)
        return queryset

        payment = self.request.query_params.get('payment')
        if payment is not None:
            queryset = queryset.filter(payment = payment )
        return queryset

class InvoiceDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = InvoiceSerializer
    queryset = Invoice.objects.all()