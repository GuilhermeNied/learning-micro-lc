# Micro LC

## O que é

micro-lc é um oquerstrador de micro-frontend open source, ele oferece uma solução flexível, aplicações frontend multi-tenant.
micro-lc é utilizado para construir qualquer tipo de aplicação web.
Utiliza diversos padrões de micro-frontend dentro da mesma aplicação.
Consiste em uma interface central que carrega, introduz e orquestra as aplicações microfrontend individualmente em runtime, enquanto fornece opções de configuração e recursos.

Micro lc suporta três padrões de micro-frontend diferentes ao mesmo tempo: iframes, parcels e shadowed componentes

Um iframe e um site externo acoplado em uma aplicação.
Parcels é uma aplicação completa(sendo uma single-page) que fica dentro do contexto da aplicação principal, mas está em um JS-sandbox e é roteada.
Shadowed components são encapsulados ná lógica de negóicios por meio de componentes web que permitem proteger contra vazamaentos de style e definir escopos de eventos utilizando HTML5 Shadow DOM.

A orquestração acontece runtime utilizando JSON ou YAML como configuração para tudo o que o micro-lc precisa para adicionar uma nova aplicação micro-frontend. A confuração pode ser fei de forma rápida e também pode ser editada em tempo de execução, fazendo com que somente atualizar a página seja o suficiente para visualizar a nova aplicação após as configurações.

Micro lc pode ser configurado via CDN e acoplado a páginas HTML ou outros scripts, e tabém como um container Docker que pode ser confurado com volumes.

## Browser compatibility

| Internet Explores 11 | Edge 79+ | Firefor 67+ | Chrome 64+ | Safara 11.1+ | Opera 51+ |
| -------------------- | -------- | ----------- | ---------- | ------------ | --------- |
| X                    | V        | V           | V          | V            | V         |

## Starting

micro-lc é enviado como um pacote CDN em ES module e pode ser importado em qualquer página HTML.

Para começar devemos criar um arquivo html importando o micro-lc do CDN como está descrito na doc.

O micro-lc funciona sem um arquivo de configuração, mas será exibida uma página 404. Podemos criar um JSON igual ao que tem na doc par começar.

## Compose Frontend

Primeiro criamos uma config em branco somente com version, como no exemplo na documentação.

## Add some compose context

[<u>Composition</u>](https://micro-lc.io/docs/concepts/composition/) se refere a capacidade de construir um microfrontend a partir de uma configuração.
Vamos ajustar a config para ter um compose context para exibir algo na rota principal `/`.

Imaginamos o seguinte cenário, desejamos exibir o seguinte conteudo na rota principal.

```
  <div>
  <img
    alt="logo"
    src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/favicon.png"
  ></img>
  <a
    href="https://micro-lc.io/"
    target="_blank"
  >Get started with the official documentation!</a>
</div>
```

Consiste em uma imagem seguida de um link, agora vamos representar esse HTML em um JSON utilizando a seguinte regra:

- `a` -> `"tag": "a"`
- `href="https://micro-lc.io/"` -> `"attributes": {"href": "https://micro-lc.io/"}`
- `Get started with the official documentation!` -> `"content": "Get started with the official documentation!"`

Para cada tag HTML vamos criar um objeto JSON com os campos `tag`, `attributes` e `content` representando a sua respectiva tag e os seus childrens.

Podemos colocar estilos nas tags

```
 "attributes": {
  "style": "height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px; font-family: Arial;"
  },
```

## Compose less by reusing

Para comerçarm os, vamos criar um arquivo chamado custom-button.js

Após criarmos o botão, executamos este comando `echo "data:text/javascript;base64,$(base64 -w 0 custom-button.js)"` para gerar uma string que colocaremos na nossa config dentro de um objeto chamado source que é uma lista.

Após isso podemos adicionar a tag sendo custom-button com o content.

Podemos tambem adicionar um this.url par adeixar o botão de redirecionamento mais genérico fazendo com que ele seja usado.
Geramos uma nova string colocamos no lugar da que já existe e adicionamos a url no objeto properties dentro do objeto onde contém a tag.

### Libs

O data protocol serve melhor quando temos não temos server. Mas em casos no mundo real utilizamos servers, então podemos utilizar libs para tornar mais fácil

Por exemplo, temos a lib bk-web-compontents:
`https://cdn.jsdelivr.net/npm/@micro-lc/bk-web-components/dist/bk-web-components.esm.js`

Ela tem um componente chamado bk-button, podemos acoplar ele em nossa config.

```
{
  "content": {
    "tag": "div",
    "content": [
      {
        ... 👈 img tag
      },
      {
        "tag": "bk-button",
        "properties": {
          "content": "Go to official documentation",
          "action": {
            "type": "href",
            "config": {
              "href": "https://micro-lc.io/",
              "target": "_blank"
            }
          }
        }
      }
    ]
  },
  "sources": [
    // 👇 here
    "https://cdn.jsdelivr.net/npm/@micro-lc/bk-web-components/dist/bk-web-components.esm.js"
  ]
}
```

# Estudar a doc da mozilla sobre web

# Olhar como ele fazer por tras

# Olhar Shadow DOM

# Refs

[micro-lc](https://micro-lc.io/docs)
[Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
