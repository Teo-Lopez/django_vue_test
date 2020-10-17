from rest_framework import serializers

from .models import Chocobar

class ChocobarSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Chocobar
        fields = ('front', 'back')
