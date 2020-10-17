from django.db import models

# Create your models here.
class Chocobar(models.Model):
    front = models.CharField(max_length=100)
    back = models.CharField(max_length=200)
    
    def __str__(self):
        return 'The front says: ' + self.front + '\nThe back says: ' + self.back