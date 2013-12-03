---
layout: post
title:  "Front-in POA"
date:   2013-11-26 11:50:52
image:  /assets/image/posts/front-in-poa.jpg
categories: rwd talks
---
This post will be written in Portuguese as it's my impressions regard speaking at [Front-in POA](http://frontinpoa.com.br/), a local conference here in Porto Alegre, RS - Brazil.

<hr />
<!-- more -->
##O evento
[Front-in POA](http://frontinpoa.com.br/) foi sensacionalmente bem organizado por [Jean Carlo Emer](http://jcemer.com), [Felipe Moura](http://felipenmoura.org/), [Jaydson Gomes](http://jaydson.org) e [Renato Rosa](http://gri.fo). Acredito que a ideia do evento foi dar uma chance pra uma galera local que vinha se preparando pra começar a palestrar, se foi isso: conseguiram. O suporte que eles deram pra mim e pra quem mais esteve envolvido foi fenomenal, permitiu que os palestrantes pudessem se preocupar apenas com sua palestra, correram na volta pra manter a organização de alto nível e o evento correndo tranquilamente. Sou só agradecimentos pra toda organização do evento.

Cabe aqui dois agradecimentos muito especiais:

- Jean, desde quando me interessei pelo evento, no primeiro anúncio do [Front-in POA](http://frontinpoa.com.br/), o Jean foi um dos maiores motivadores pra que eu conseguisse organizar a talk. Procurei ele por DM e sempre esteve disposto a responder dúvidas e aconselhar. Indiretamente serviu (e serve!) de inspiração através de suas palestras e desde a época dos Code'n'Bier. Esse cara é um fora de série, sem palavras pra agradecer o tanto que já aprendi com ele.

- Felipe, como usei o [Power Polygon](https://github.com/braziljs/power-polygon) para fazer os slides, devo muito ao Felipe. É uma ferramenta impressionante! Tantos recursos que não deixa a desejar em nada a qualquer outro 'montador de apresentações' - inclusive supera vários - ainda vou dominar toda a versatilidade que essa ferramenta oferece! Além disso, enquanto rolavam as outras palestras, o Felipe achou um tempo pra me ajudar a configurar o iPhone como controle remoto da apresentação (sim! Power Polygon faz isso com qualquer smartphone!), não deu certo por alguma bruxaria no meu Node/Ubuntu/what-the-fuck!, fica pra próxima. Valeu!


##As palestras
Não consegui assistir a todas. Palestrante de primeira viagem, estava preocupado demais em aumentar o controle sobre minha própria apresentação. Revendo e repensando os slides constantemente.

Mesmo assim, tive a oportunidade de conversar com todos palestrantes, até mesmo das palestras que não assisti. Tenho certeza que foram muito bem, inclusive pela repercussão durante o evento mesmo.

##O evento da UX
Em absolutamente todas palestras do evento foi mencionado o termo User Experience. O quão importante é e do que se trata de fato. Fiquei feliz com isso, mostra uma preocupação do mercado em fazer aplicações que realmente transmitam sucesso ao usuário, um viés mais preocupado com o resultado final do que nas etapas que levam a ele. Chega daquela velha queda de braço entre um bitmap e um código, dêem as mãos (cuidado pra não exagerar na literalidade aqui... figurativamente já tá legal!) e façam um bom serviço juntos.

Mas cabe uma ressalva. Em meio a argumentos pertinentes e bem embasados, também vi conceitos meio etéreos e utópicos. Em UX, sucesso não é mágica. Não é sobre "encantar" alguém a la fada madrinha da Disney. O ponto é entregar o que o usuário quer do melhor jeito possível. Ponto.

E, para isso, além de bons layouts, precisamos de bons códigos. Um bom conceito é só conversa se ele não for embasado por práticas. Então, beleza, peguem todos os conceitos, do mais pé-no-chão ao mais serelepe flutuante e encaixem ideias práticas nele. Como o Rei da Web poderia dizer, um bom código agrega valor à UX.

UX é prioridade.
Mas UX sem bom código é só conversa.

##[Responsive Web Workflow](https://speakerdeck.com/atilafassina/responsive-web-workflow)
O tema da minha talk foi montar um Workflow para RWD. Felizmente eu só enxerguei o tamanho desse desafio dias depois de submeter o título. O negócio foi enfiar a cabeça em artigos, ficar vidrado nos eventos e palestras de monstros que estavam acontecendo entre o fim de Outubro e início de Novembro e nos artigos que não parávam de sair. Parecia que o tal do Murphy queria me segurar fazendo slides até o último minuto. Mas foi bom.

Dada a amplitude do assunto, alguns assuntos precisaram ter seu espaço reduzido na talk, ainda quero voltar a eles com mais calma e mais profundidade.

Enfim, a resposta que tive ao tema da palestra foi muito legal. Vi uma galera muito interessada por RWD, até mesmo antes de subir no palco algumas pessoas já vinham comentar tópicos relacionados.

Subi no palco depois do [Franz Figueroa](https://twitter.com/franzfigueroa) falar sobre UX, momento mais do que oportuno pra encaixar um papo de RWD.

##Resumo da missa... =)
Após uma breve ressalva de que Workflow não deve ser escrito em pedra -cada projeto precisa do seu-, fomos direto à UX. Antes de mergulhar nos conceitos de RWD senti a necessidade do quão importante isso é para o mercado como um todo (nossos clientes e nossos usuários finais). Falamos de percepção de sucesso, de marketing e, finalmente, chegamos em design.

Após estabelecermos que design e conteúdo são a mesma coisa (Bauhaus, eu te amo! =P), dobramos a barra da calça e começamos a entrar no mar do RWD (ó, que poético).

Partimos com medidas relativas (dos **ems** aos **viewports**), e fomos rapidamente para as media queries. Vimos as novas `media features` formas diferentes de se declarar uma media query com aquela mãozinha do SASS, e falando em SASS...

> Se CSS fosse o Tony Stark, SASS seria a armadura.

A armadura não funciona sem o piloto e por isso, escrever CSS apropriadamente é uma necessidade básica, por isso analisamos as principais características de **SMACSS**, **BEM** e **OOCSS** pra então montarmos umas dicas de como formar uma metodologia própria embasada nos conceitos mais consolidados.

Com os conceitos em mente, demos uma olhada em 3 features muito úteis do SASS: `@import`, `%placeholder` e `@at-root` e como elas podem subir o nível do nosso jogo.

Pausa dramática para os abusos de pré-processadores, com a palavra: `@extend`.

E chegamos nas Guias de Estilos, as style guides mudaram a forma como eu penso layout e espero que tenham feito o mesmo com mais pessoas. Não consigo mais pensar em layouts *full comp* com bitmaps engessados. Vimos **style tiles**, **style prototypes**, **element collages**, **pattern primer** e **pattern lab**

E ao **Atomic Design**. A coluna vertebral de um projeto responsivo, a abordagem de átomos, moléculas, organismos, templates e páginas facilita a tomada de decisões de qualquer coder ou designer e serve de base para modularização de todo o código de minhas aplicações desde que comecei a usá-la.

**Grunt** é muito mais do que um minificador e concatenador de código. Vimos 2 tarefas imprescindíveis pra um projeto responsivo e outra muito promissora para manutenção de CSS legado.

- Combine Media Queries: Vascula sua CSS por Media Queries repetididas [o que acontece se você está estabelecendo seus breakpoints por elemento (a.k.a 'o jeito certo', IMHO!)]

- Imagemin: minifica suas imagens e salva kb que seriam desnecessariamente servidos.

- UnCSS: busca seletores não usados em seu HTML e os retira da CSS. Cuidado! Ainda não está pegando seletores dinâmicos.

E, por fim, encerrei falando do meu primeiro projeto Open-Source:

##[BrowserFit](http://browserfit.github.io)
Completamente inspirado na ideia do [BrowserDiet](http://browserdiet.com/), o BrowserFit quer facilitar a vida de quem foca em RWD.

No [site](http://browserfit.github.io/) encontraremos guidelines, considerações gerais a se fazer nas diferentes etapas do processo, organizadas, claro, na ordem que você vai precisar primeiro.

No [repositório](https://github.com/browserfit) vamos juntar um showcase de técnicas interessantes para colocar na sua produção. Desde formas de manipular o `svg` com media queries e reduzindo HTTP Requests, `mixins` úteis, formas diferentes de se escrever uma media query, etc... Se você teve uma solução interessante no seu trabalho, transforme num exemplo legal e deixe outros usarem como inspiração ou até copiarem -vale lembrar: cada exemplo é um repositório, então a licença que você vai colocar é decisão sua! ;)

##TL;DR
Resumindo a parada toda. O [Front-in POA](http://frontinpoa.com.br/) foi uma experiência sensacional e tenho só elogios aos organizadores, demais envolvidos e à galera que compareceu.

Palestrar é intenso. Se aprende muito antes e mais ainda depois, espero ter ajudado alguém tanto quanto me senti ajudado enquanto assistia às outras palestras. Também adoraria que alguém tenha aprendido com a minha talk tanto quanto eu mesmo aprendi preparando-a.

Meu obrigado à todos que fizeram parte deste evento tão AFUDÊ.
