# Generated by Django 4.1.4 on 2022-12-07 23:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Authors',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author_ID', models.CharField(max_length=10)),
                ('lName', models.CharField(max_length=20)),
                ('fName', models.CharField(max_length=20)),
                ('email_address', models.CharField(max_length=20)),
                ('mailing_country', models.CharField(max_length=20)),
                ('mailing_city', models.CharField(max_length=20)),
                ('mailing_street', models.CharField(max_length=20)),
                ('mailing_room', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Departments',
            fields=[
                ('DepartmentId', models.AutoField(primary_key=True, serialize=False)),
                ('DepartmentName', models.CharField(max_length=500)),
            ],
        ),
    ]