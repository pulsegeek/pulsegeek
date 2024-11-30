
from django.shortcuts import render, redirect

from .models import Usuarios
from .forms import Cadastro 


def home(request):
    return render(request, 'index.html')


def cad(request):
    return render(request, 'loginCadastro.html')

def pedido_func(request):
    return render(request, 'pedidos-funcionário.html')

def esquecersenha(request):
    return render(request, 'esquecer-senha.html')

def carrinho(request):
    return render(request, 'carrinho.html')

def minha_conta(request):
    return render(request, 'minha-conta.html')

def estoque(request):
    return render(request, 'estoque.html')

def pedidos(request):
    return render(request, 'pedidos.html')

def prod(request):
    return render(request, 'visuProduto.html')




 # Certifique-se de que você tenha criado um formulário

def cadastrar_usuario(request):
    if request.method == 'POST':
        form = Cadastro(request.POST)
        if form.is_valid():
            # Verifique se a senha e a confirmação da senha são iguais
            senha = form.cleaned_data['senha']
            confirma_senha = request.POST.get('confirmaSenha')
            if senha != confirma_senha:
                form.add_error('confirmaSenha', 'As senhas não coincidem.')
            else:
                # Salve o usuário
                form.save()
                return redirect('inicio')  # Redirecione para uma página de sucesso
        else:
            print(form.errors)  # Para depuração, verifique os erros do formulário
    else:
        form = Cadastro()
    
    return render(request, 'loginCadastro.html', {'form': form})
        

     





