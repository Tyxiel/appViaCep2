# App Busca CEP

Uma aplicação web simples e eficiente para consultar endereços brasileiros a partir do CEP, utilizando a API ViaCEP.

## Sobre o Projeto

O App Busca CEP é uma ferramenta front-end que visa facilitar a obtenção de informações de endereço. Ao digitar um CEP válido no campo principal, a aplicação automaticamente busca os dados correspondentes (logradouro, complemento, bairro, cidade, UF e DDD) através da ViaCEP API e os exibe na tela. O projeto também inclui formatação automática do campo CEP e ajuste dinâmico da largura dos inputs.

## Funcionalidades

* Input para inserção do CEP com formatação automática (#####-###).
* Consulta de dados de endereço em tempo real via ViaCEP API ao sair do campo CEP.
* Exibição de:
    * Endereço (Logradouro, Complemento)
    * Cidade e Estado (UF)
    * DDD
* Ajuste dinâmico da largura dos campos de input com base no seu conteúdo.

## Tecnologias Utilizadas

* **HTML5**: Estrutura básica da interface com os campos de input.
* **CSS3**: Estilização dos inputs e do container.
* **JavaScript (ES6+)**: Lógica para formatação do CEP, requisição à API ViaCEP (usando `Workspace`), manipulação do DOM para exibir os dados e ajuste dinâmico da largura dos inputs.
* **ViaCEP API**: API pública para consulta de CEPs. (https://viacep.com.br/)

## Como Usar/Testar

1.  Clone este repositório: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
2.  Navegue até o diretório do projeto.
3.  Abra o arquivo `index.html` no seu navegador.
4.  Digite um CEP válido no campo "CEP" e clique fora do campo (ou pressione Tab) para ver as informações.

Ou acesse a demonstração online: [App Busca CEP](https://tyxiel.github.io/appViaCep2/)
