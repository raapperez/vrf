# vrf

A solução foi feita utilizando principalmente **React** e **Node.js**.


## Instalação

1. Instalar [node v6.5.0](https://nodejs.org) (ou superior). 
2. Fazer clone do repositório no github: https://github.com/raapperez/vrf.git
3. Rodar o comando na pasta do projeto para instalar as dependências:
```
npm install
```

## Execução

### Para executar em produção:

O modo em produção faz uglify dos arquivos javascripts e configura o Express para fazer compressão dos arquivos.

```
npm run compile
npm run start
```

### Para executar em modo desenvolvimento:

```
npm run start-dev
```

### Para executar testes:
```
npm run test
```

## Considerações

* O código fonte frontend está em */frontend/src/js*. Este código foi feito usando ES6 e por motivos de compatibilidade é compilado para a pasta */frontend/js*  pelo *babel* para ser usado no server rendering. Este código também é compilado pelo *wepback* e enviado para a pasta */public/js* para ser carregado na página.

* Os arquivos fonte LESS estão na pasta */frontend/less*. Estes arquivos são compilados para CSS pelo *gulp* e enviados para a pasta */public/css*.

* Como são páginas a serem indexadas por algoritmos de busca, foi utilizado o server rendering do React para trazer o html já com o conteúdo, e a partir desse momento, a aplicação funciona como uma single page application utilizando chamadas assíncronas para obter conteúdo.

* Como são muitos anúncios, o correto seria fazer paginação para mostrar poucos anúncios por vez. Porém, a api apresentada não vinha com opções de paginação. Cheguei a pensar em restringir a área para buscar menos dados por vez mas isso causaria os seguintes problemas:
    - Cada pedaço de área poderia ter mais ou menos anúncios
    - Daria preferência a alguns territórios em detrimento de outros, e isso poderia causar discórdia entre os bytes até então pacíficos.
Por causa disso foi decidido não ter paginação. Mas saibam que estou bem habituado a fazer.

* Como a grande quantidade de dados inviabiliza ver de forma adequada a solução devido à lentidão que o browser fica. Limitei o número de anúncios a serem mostrados. Para alterar essa configuração edite o arquivo */frontend/src/js/contants.js* o valor *maxProperties*.

* Lembrando que sempre que um arquivo for alterado dentro da pasta */frontend/src/*, o projeto tem que ser recompilado.

* No layout fornecido, o filtro não possuía um botão de submit. Achei melhor colocar porque achei muito estranho o usuário ser obrigado a apertar enter para filtrar ou usar o onBlur dos campos de texto.

* Notem que quado um filtro é aplicado, a url muda mas na verdade o filtro acontece apenas no client-side (pode ser verificado na aba network do developer tools do chrome). Se por acaso o usuário atualizar a página no browser ou copiar essa url para outra pessoa, o server render fará com que a página já venha com o conteúdo do filtro.

* Como o layout da página do anúncio não foi fornecida, coloquei o mesmo card da página de anúncios ao invés de criar um layout novo. Preferi fazer isso do que deixar o botão de ver anúncio sem função, e dessa forma também pude mostrar que os componentes do React podem ser reaproveitados.

* Foi fazendo esse projeto que aprendi a fazer o server rendering do React, funcionalidade que achei bem poderosa.