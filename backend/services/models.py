from django.db import models
from serviceowners.models import ServiceOwner
from django.utils.timezone import now

from django.db.models.signals import pre_save, post_save

from dzfetes.utils import unique_slug_generator

class Service(models.Model):
    class ServiceCategory(models.TextChoices):
        PLACE = 'Place'
        FOOD = 'Food'
        CLOTHEANDSHOE = 'Clothe & Shoe'
        MATERIAL = 'Material'
    
    class Wilayas(models.TextChoices):
        AllWilaya = "All Willaya"
        Adrar = "Adrar"
        Chlef = "Chlef"
        Laghouat = "Laghouat"
        OumElBouaghi = "Oum El Bouaghi"
        Batna = "Batna"
        Bejaia = "Béjaïa"
        Biskra = "Biskra"
        Bechar = "Béchar"
        Blida = "Blida"
        Bouira ="Bouira"
        Tamanrasset = "Tamanrasset"
        Tebessa = "Tébessa"
        Tlemcen = "Tlemcen"
        Tiaret ="Tiaret"
        TiziOuzou = "Tizi Ouzou"
        Alger ="Alger"
        Djelfa = "Djelfa"
        Jijel ="Jijel"
        Setif ="Sétif"
        Saida = "Saïda"
        Skikda = "Skikda"
        SidiBelAbbes = "Sidi Bel Abbès"
        Annaba = "Annaba"
        Guelma ="Guelma"
        Constantine ="Constantine"
        Medea = "Médéa"
        Mostaganem = "Mostaganem"
        MSila = "M'Sila"
        Mascara = "Mascara"
        Ouargla = "Ouargla"
        Oran = "Oran"
        ElBayadh = "El Bayadh"
        Illizi = "Illizi"
        BordjBouArreridj = "Bordj Bou Arreridj"
        Boumerdes = "Boumerdès"
        ElTarf = "El Tarf"
        Tindouf = "Tindouf"
        Tissemsilt ="Tissemsilt"
        ElOued = "El Oued"
        Khenchela = "Khenchela"
        SoukAhras = "Souk Ahras"
        Tipaza ="Tipaza"
        Mila ="Mila"
        AinDefla = "Aïn Defla"
        Naama ="Naâma"
        AinTemouchent = "Aïn Témouchent"
        Ghardaia ="Ghardaïa"
        Relizane = "Relizane"
        Timimoun = "Timimoun"
        BordjBadjiMokhtar = "Bordj Badji Mokhtar"
        OuledDjellal ="Ouled Djellal"
        BeniAbbes = "Béni Abbès"
        InSalah = "In Salah"
        InGuezzam = "In Guezzam"
        Touggourt = "Touggourt"
        Djanet ="Djanet"
        ElMGhair = "El M'Ghair"
        ElMeniaa = "El Meniaa"

    owner = models.ForeignKey(ServiceOwner, on_delete=models.DO_NOTHING)
    slug = models.CharField(max_length=200, unique=True)
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    wilaya = models.CharField(max_length=90, choices=Wilayas.choices, default=Wilayas.AllWilaya)
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

def rl_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(rl_pre_save_receiver, sender=Service)