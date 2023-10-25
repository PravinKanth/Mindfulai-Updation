import json
from django.contrib.auth import authenticate, login
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist
from .models import Signup,Pitch

# Create your views here.
@csrf_exempt
def signup(request):
    if request.method=="POST":
        try:
            print("sdfsd")
            signupname=request.POST.get("signupname").upper()
            signupemail=request.POST.get("signupemail")
            signuppassword=request.POST.get("signuppassword")
            print("hi")
            signup_obj=Signup(signupname=signupname,signupemail=signupemail,signuppassword=signuppassword)
            signup_obj.save()
            print("saved")

            return HttpResponse("Done!")
        except:
            return HttpResponse("INVALID JSON!")

@csrf_exempt
def signin(request):
    if request.method == "POST":
        try:
            signinemail = request.POST.get("signinemail")
            signinpassword = request.POST.get("signinpassword")
            print(signinemail, "   ", signinpassword)

            existing_user = Signup.objects.filter(signupemail=signinemail).first()
            if existing_user is None:
                return HttpResponse("E-Mail ID not found!")

            if existing_user.signuppassword == signinpassword:
                response_data=  {
                        "message": "Authentication Successful",
                        "name": existing_user.signupname
                }

                return HttpResponse(json.dumps(response_data),content_type="application/json")
            else:
                return HttpResponse("Invalid credentials")

        except:
            return HttpResponse("INVALID JSON!")
        


@csrf_exempt
def pitch(request):
    if request.method == "POST":
        try:
            proposal = request.POST.get("proposal")
            theme = request.POST.get("theme")
            budget = request.POST.get("budget")
            name = request.POST.get("name")
            email = request.POST.get("email")
        
            print(proposal,theme,budget,name,email)
            pitch=Pitch(proposal=proposal,theme=theme,budget=budget,name=name,email=email)
            pitch.save()
            return HttpResponse("Success")
        except:
            return HttpResponse("Invalid")

     
