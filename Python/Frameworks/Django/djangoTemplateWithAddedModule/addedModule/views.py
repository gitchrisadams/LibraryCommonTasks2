from django.shortcuts import render

from django.http import HttpResponse

def addedModule(request):
    return HttpResponse("Hello worlds!")
