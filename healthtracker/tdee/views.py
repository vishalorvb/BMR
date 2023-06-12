
from django.shortcuts import render

# Create your views here.

def tdee(request):
    return render(request, 'tdee/tdee.html')
