# Generated by Django 4.2.3 on 2023-07-16 06:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pitch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('proposal', models.CharField(max_length=200)),
                ('theme', models.CharField(max_length=40)),
                ('budget', models.IntegerField()),
                ('name', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Signup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('signupname', models.CharField(max_length=100)),
                ('signupemail', models.CharField(max_length=100)),
                ('signuppassword', models.CharField(max_length=100)),
            ],
        ),
    ]