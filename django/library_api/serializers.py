from rest_framework import serializers
from library.models import Author,  Customer,  Event,Book,StudyRoom,Copy,Invitation,Reservation,Borrowing,Invoice,Payment

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model=Author
        fields=('author_id','lname','fname','email_address','mailing_country','mailing_city','mailing_street','mailing_room')
        extra_kwargs = {'books':{'required':False}}

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields=('customer_id','fname', 'lname', 'phone_number', 'email_address', 'identification_type', 'identification_num')
        extra_kwargs= {'events':{'required':False}}

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('event_id', 'topic', 'name', 'type', 'start_datetime', 'stop_datetime')
        extra_kwargs= {'customers':{'required':False}}

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('book_id','topic','type')
        extra_kwargs = {'authors':{'required':True}}

class StudyRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyRoom
        fields = ('room_id' ,'capacity' )


class CopySerializer(serializers.ModelSerializer):
    class Meta:
        model = Copy
        fields = ('copy_id','status','book')

class InvitationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invitation
        fields = ('invitation_id','author','event')

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = ('Reservation_id','date','time_slot','number_of_people','room','customer')

class BorrowingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Borrowing
        fields = ('borrow_id','status','borrow_date','expect_return_date','fee','customer','actural_return_date','copy','invoice')

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ('payment_id','amount','date','card_holder_lname','card_holder_fname')

class InvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice
        fields = ('Invoice_id','date','borrowing','amount')