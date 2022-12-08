from rest_framework import serializers
from library.models import LibraryAuthor, LibraryDepartments

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model=LibraryAuthor
        fields=('author_id','lname','fname','email_address','mailing_country','mailing_city','mailing_street','mailing_room')