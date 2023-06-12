from django.db import models

# Create your models here.

class food(models.Model):
    name = models.CharField(max_length=25)
    description = models.CharField(max_length=25)
    protein = models.FloatField()
    carbs = models.FloatField()
    fat = models.FloatField()
    
    def __str__(self):
        return self.name
    
