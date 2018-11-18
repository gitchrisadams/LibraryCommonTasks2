from django.shortcuts import render, redirect
from djangoBasicLoginForm.forms import RegistrationForm
from django.urls import reverse_lazy
from django.views import generic
import logging

def mainPage(request):
    if request.user.is_authenticated:
        return render(request, "mainPage.html")
    else:
        return render(request, "registration/login.html")


def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
        else:
            args = {'form': form}
            return render(request, 'signup.html', args)
    else:
        form = RegistrationForm()
        args = {'form': form}
        return render(request, 'signup.html', args)