from django.db import models
# from django.contrib

# Create your models here.


class Author(models.Model):
    author_id = models.BigIntegerField(primary_key=True)
    lname = models.CharField(max_length=20)
    fname = models.CharField(max_length=20)
    email_address = models.CharField(max_length=20, blank=True, null=True)
    mailing_country = models.CharField(max_length=20, blank=True, null=True)
    mailing_city = models.CharField(max_length=20, blank=True, null=True)
    mailing_street = models.CharField(max_length=20, blank=True, null=True)
    mailing_room = models.CharField(max_length=20, blank=True, null=True)



class Customer(models.Model):
    customer_id = models.BigIntegerField(primary_key=True)
    fname = models.CharField(max_length=20)
    lname = models.CharField(max_length=20)
    phone_number = models.BigIntegerField(blank=True, null=True)
    email_address = models.CharField(max_length=20, blank=True, null=True)
    identification_type = models.CharField(max_length=20)
    identification_num = models.BigIntegerField()



class Event(models.Model):
    event_id = models.BigIntegerField(primary_key=True)
    topic = models.CharField(max_length=20)
    name = models.CharField(max_length=20)
    type = models.CharField(max_length=1)
    start_datetime = models.DateTimeField()
    stop_datetime = models.DateTimeField()
    customers = models.ManyToManyField('Customer',related_name='events',blank=True)



class Book(models.Model):
    book_id = models.BigIntegerField(primary_key=True)
    topic = models.CharField(max_length=30)
    type = models.CharField(max_length=10)
    authors = models.ManyToManyField('Author',related_name='books',blank=True)



class StudyRoom(models.Model):
    room_id = models.BigIntegerField(primary_key=True)
    capacity = models.SmallIntegerField()

class Copy(models.Model):
    copy_id = models.BigIntegerField(primary_key=True)
    status = models.CharField(max_length=10)
    book = models.ForeignKey('Book', models.DO_NOTHING)



class Invitation(models.Model):
    invitation_id = models.BigIntegerField(primary_key=True)
    author=models.ForeignKey('Author',models.DO_NOTHING)
    event = models.ForeignKey('Event',models.DO_NOTHING)

class Reservation(models.Model):
    reservation_id = models.BigIntegerField(primary_key=True)
    date = models.DateTimeField(db_column='DATE')  # Field name made lowercase.
    time_slot = models.CharField(max_length=10)
    number_of_people = models.SmallIntegerField()
    room = models.ForeignKey('StudyRoom',models.DO_NOTHING)
    customer=models.ForeignKey('Customer',models.DO_NOTHING)


class Borrowing(models.Model):
    borrow_id = models.BigIntegerField(primary_key=True)
    status = models.CharField(max_length=10)
    borrow_date = models.DateTimeField()
    expect_return_date = models.DateTimeField()
    fee = models.DecimalField(max_digits=4, decimal_places=2, blank=True, null=True)
    customer = models.ForeignKey('Customer', models.DO_NOTHING)
    actural_return_date = models.DateTimeField(blank=True, null=True)
    copy = models.ForeignKey('Copy', models.DO_NOTHING)
    invoice = models.ForeignKey('Invoice', models.DO_NOTHING)


class Invoice(models.Model):
    invoice_id = models.BigIntegerField(primary_key=True)
    date = models.DateTimeField(db_column='DATE')  # Field name made lowercase.
    amount = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)


class Payment(models.Model):
    payment_id = models.BigIntegerField(primary_key=True)
    amount = models.DecimalField(max_digits=4, decimal_places=2)
    date = models.DateTimeField(db_column='DATE')  # Field name made lowercase.
    card_holder_lname = models.CharField(max_length=20)
    card_holder_fname = models.CharField(max_length=20)
    invoice=models.ForeignKey('Invoice', models.DO_NOTHING)






































