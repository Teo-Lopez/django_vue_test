from django.shortcuts import render
from rest_framework import viewsets

from .serializers import ChocobarSerializer
from .models import Chocobar

# Create your views here.

class ChocobarView(viewsets.ModelViewSet):
    queryset = Chocobar.objects.all()
    serializer_class = ChocobarSerializer
