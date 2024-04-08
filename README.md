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

# Olhar Shadow DOM

# Refs

[micro-lc](https://micro-lc.io/docs)
[Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
