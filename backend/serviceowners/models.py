from django.db import models
from datetime import datetime
from accounts.models import UserAccount

def upload_path(instance, filename):
    return '/'.join(['Service-Owner', str(instance.account.id), filename])

class ServiceOwner(models.Model):
    name = models.CharField(max_length=50)
    photo = models.ImageField(upload_to='service_owner', blank=True, null=True)
    description = models.TextField(blank=True)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=100)
    account = models.OneToOneField(UserAccount,on_delete=models.CASCADE,primary_key=True,)

    def __str__(self):
        return self.name