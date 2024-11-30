from django.contrib import admin
from django.urls import path,include
from pulse_geek_app import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('pulse_geek_app/', include('pulse_geek_app.urls')),  # Inclua as URLs do seu app

    path('', views.home, name='inicio'),
    path('login/',views.cad, name='pag-cadastro'),
    path('login/esquecersenha',views.esquecersenha,name='esquecer-senha'),
    path('carrinho/',views.carrinho, name='pag-carrinho'),
    path('minha_conta',views.minha_conta, name='minhaconta'),
    path('estoque',views.estoque, name='estoque'),
    path('pedidos',views.pedidos, name='pedidos'),
    path('produto/',views.home,name='produto'),
    path('pedidos/funcionarios',views.pedido_func, name='pedido-funcionarios'),
]   
