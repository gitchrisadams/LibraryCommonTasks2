from django.http import HttpResponse

from django.shortcuts import render

def home(request):
    #return HttpResponse("Hello world!")
    return render(request, 'home.html')

def about(request):
    # The "50 games" string will be inserted into {{ngames}} var in about.html template.
    return render(
        request, 'about.html',
        {'ngames': "50 games"}
    )