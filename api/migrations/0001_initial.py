# Generated by Django 2.2.16 on 2020-10-17 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chocobar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('front', models.CharField(max_length=100)),
                ('back', models.CharField(max_length=200)),
            ],
        ),
    ]
