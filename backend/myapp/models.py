from django.db import models

# Create your models here.
class Signup(models.Model):
    signupname= models.CharField(max_length=100)
    signupemail= models.CharField(max_length=100)
    signuppassword= models.CharField(max_length=100)

class Pitch(models.Model):
    proposal = models.CharField(max_length=200)
    theme = models.CharField(max_length=40)
    budget = models.IntegerField()
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    
