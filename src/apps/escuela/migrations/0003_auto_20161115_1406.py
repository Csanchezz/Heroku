# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-11-15 14:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('escuela', '0002_auto_20161102_1514'),
    ]

    operations = [
        migrations.AlterField(
            model_name='escuela',
            name='distrito',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
