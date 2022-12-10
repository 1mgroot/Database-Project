from django.db import models
# from django.contrib

# Create your models here.

class LibraryDepartments(models.Model):
    departmentid = models.AutoField(db_column='DepartmentId', primary_key=True)  # Field name made lowercase.
    departmentname = models.CharField(db_column='DepartmentName', max_length=500)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'library_departments'

class LibraryAuthor(models.Model):
    author_id = models.BigIntegerField(primary_key=True)
    lname = models.CharField(max_length=20)
    fname = models.CharField(max_length=20)
    email_address = models.CharField(max_length=20, blank=True, null=True)
    mailing_country = models.CharField(max_length=20, blank=True, null=True)
    mailing_city = models.CharField(max_length=20, blank=True, null=True)
    mailing_street = models.CharField(max_length=20, blank=True, null=True)
    mailing_room = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'library_author'

class Customer(models.Model):
    customer_id = models.BigIntegerField(primary_key=True)
    fname = models.CharField(max_length=20)
    lname = models.CharField(max_length=20)
    phone_number = models.BigIntegerField(blank=True, null=True)
    email_address = models.CharField(max_length=20, blank=True, null=True)
    identification_type = models.CharField(max_length=20)
    identification_num = models.BigIntegerField()

    class Meta:
        managed = True
        db_table = 'customer'

class Event(models.Model):
    event_id = models.BigIntegerField(primary_key=True)
    topic = models.CharField(max_length=20)
    name = models.CharField(max_length=20)
    type = models.CharField(max_length=1)
    start_datetime = models.DateTimeField()
    stop_datetime = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'event'

class CustomerEvent(models.Model):
    customer = models.OneToOneField(Customer, models.DO_NOTHING, primary_key=True)
    event = models.ForeignKey('Event', models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'customer_event'
        unique_together = (('customer', 'event'),)