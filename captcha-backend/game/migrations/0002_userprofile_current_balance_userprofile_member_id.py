# Generated by Django 5.0.1 on 2024-01-24 16:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='current_balance',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='member_id',
            field=models.CharField(default='gjus', max_length=50),
            preserve_default=False,
        ),
    ]
