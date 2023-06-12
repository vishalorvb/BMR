from django.shortcuts import render

def bmr(request):
    return render(request, 'Bmr/bmr.html')

