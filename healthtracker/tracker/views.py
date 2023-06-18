from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import calorieTracker
# Create your views here.

def profile(request):
    value = calorieTracker.objects.filter(user=request.user.id)
    print(value)
    return render(request, 'tracker/track.html',{"value":value})

@csrf_exempt   
def saveCalorie(request):
    print("called")
    if request.method == 'POST': 
        json_data = json.loads(request.body)
        print(json_data)
        response_data = {'message': 'JSON data processed successfully'}
        return JsonResponse(response_data)