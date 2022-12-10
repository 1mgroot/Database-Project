from rest_framework import generics
from library.models import LibraryAuthor, Customer, Event
from .serializers import AuthorSerializer, CustomerSerializer, EventSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

class AuthorList(generics.ListCreateAPIView):
    serializer_class = AuthorSerializer

    def get_queryset(self):
        queryset = LibraryAuthor.objects.all()
        return queryset
        
class AuthorDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AuthorSerializer
    queryset = LibraryAuthor.objects.all()

class CustomerList(generics.ListCreateAPIView):
    serializer_class = CustomerSerializer
    def get_queryset(self):
        return Customer.objects.all()

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()

class EventList(generics.ListCreateAPIView):
    serializer_class = EventSerializer
    def get_queryset(self):
        return Event.objects.all()

class EventDetail(generics.RetrieveUpdateDestroyAPIView):
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