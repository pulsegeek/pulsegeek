from django.db import models

class Usuarios(models.Model):
    nome = models.CharField(max_length=100)
    cpf = models.CharField(max_length=11, unique=True)  # CPF geralmente tem 11 dígitos
    email = models.EmailField(unique=True)
    senha = models.CharField(max_length=100)
    celular = models.CharField(max_length=15)  # Ajuste conforme o formato do celular
    
    class Meta:
        db_table = "usuario"  # Nome da tabela no banco de dados

    def __str__(self):
        return self.nome  # Método para retornar o nome do usuário como representação do objetoimport logging

