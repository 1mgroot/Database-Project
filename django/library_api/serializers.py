from rest_framework import serializers
from library.models import LibraryAuthor, LibraryDepartments, Customer, CustomerEvent, Event

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model=LibraryAuthor
        fields=('author_id','lname','fname','email_address','mailing_country','mailing_city','mailing_street','mailing_room')

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields=('customer_id','fname', 'lname', 'phone_number', 'email_address', 'identification_type', 'identification_num')

class CustomerEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerEvent
        fields = ('customer', 'event')

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('event_id', 'topic', 'name', 'type', 'start_datetime', 'stop_datetime')