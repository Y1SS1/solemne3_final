from django.db import models

class Ticket(models.Model):
    ESTADOS_CHOICES = [
        ('Abierto', 'Abierto'),
        ('En Progreso', 'En Progreso'),
        ('Cerrado', 'Cerrado'),
    ]

    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    estado = models.CharField(max_length=50, choices=ESTADOS_CHOICES, default='Abierto')
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo