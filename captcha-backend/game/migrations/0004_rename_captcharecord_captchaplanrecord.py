# Generated by Django 5.0.1 on 2024-01-26 05:22

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0003_plan_amount'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameModel(
            old_name='CaptchaRecord',
            new_name='CaptchaPlanRecord',
        ),
    ]