# from rest_framework import generics
from library.models import LibraryAuthor
from .serializers import AuthorSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class AuthorList(ListCreateAPIView):
    serializer_class = AuthorSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        queryset = LibraryAuthor.objects.all()
        return queryset
        
class AuthorDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = AuthorSerializer
    queryset = LibraryAuthor.objects.all()

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