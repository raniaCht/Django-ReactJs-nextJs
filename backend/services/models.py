from django.db import models
from serviceowners.models import ServiceOwner
from django.utils.timezone import now

class Service(models.Model):
    class ServiceCategory(models.TextChoices):
        PLACE = 'Place'
        FOOD = 'Food'
        CLOTHEANDSHOE = 'Clothe & Shoe'
        MATERIAL = 'Material'

    owner = models.ForeignKey(ServiceOwner, on_delete=models.DO_NOTHING)
    slug = models.CharField(max_length=200, unique=True)
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    price = models.IntegerField()
    category = models.CharField(max_length=50, choices=ServiceCategory.choices, default=ServiceCategory.MATERIAL)
    unit_price = models.CharField(max_length=100)
    photo_main = models.ImageField(upload_to='services/%Y/%m/%d/')
    photo_1 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_2 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_3 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_4 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_5 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_6 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_7 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_8 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_9 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_10 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_11 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_12 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_13 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_14 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_15 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_16 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_17 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_18 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_19 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)
    photo_20 = models.ImageField(upload_to='services/%Y/%m/%d/', blank=True)

    def __str__(self):
        return self.title