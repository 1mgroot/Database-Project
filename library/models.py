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