# Chronos Pomodoro 🍅

<<<<<<< HEAD

> Uma aplicação de produtividade focada em precisão temporal e gerenciamento de
> ciclos, desenvolvida com React, TypeScript e Web Workers. ======= Uma
> aplicação de produtividade focada em precisão temporal e gerenciamento de
> ciclos, desenvolvida com React, TypeScript e Web Workers.
>
> > > > > > > 95fadf876d7739870be1c2435a1eb0de8cf20304

![Project Status](https://img.shields.io/badge/status-concluído-brightgreen)
![Tech](https://img.shields.io/badge/tech-React%20%7C%20TypeScript%20%7C%20Vite-blue)

## 📸 Visão Geral

<<<<<<< HEAD A interface foi projetada para ser limpa e direta, com feedback
visual claro do estado atual do ciclo.

|                    Home (Timer & Foco)                     |                Configurações (Personalização)                 |
| :--------------------------------------------------------: | :-----------------------------------------------------------: |
| ![Página Inicial](./screenshots/chronos-pomodoro-home.png) | ![Configurações](./screenshots/chronos-pomodoro-settings.png) |
|                  **Histórico de Tarefas**                  |                        **Página 404**                         |
|  ![Histórico](./screenshots/chronos-pomodoro-history.png)  |     ![Not Found](./screenshots/chronos-pomodoro-page.png)     |

## 🧠 Engenharia e Decisões Arquiteturais

Este não é apenas mais um timer. A arquitetura foi pensada para resolver
problemas comuns em aplicações de cronometragem baseadas em browser e para
garantir escalabilidade.

### 1. Precisão Temporal com Web Workers

Navegadores modernos reduzem a prioridade de execução de JavaScript em abas
inativas (throttling), o que faz com que `setInterval` ou `setTimeout` comuns
percam precisão, atrasando o timer.

- **Solução:** Implementei um **Web Worker** dedicado (`timerWorker.js`). O
  contador roda em uma thread separada (background thread), garantindo que o
  tempo seja contabilizado corretamente mesmo se o usuário mudar de aba ou
  minimizar o navegador.
- **Padrão Singleton:** A classe `TimerWorkerManager` utiliza o padrão Singleton
  para garantir que exista apenas uma instância do Worker gerenciando o tempo em
  toda a aplicação.

### 2. Gestão de Estado com Context API + Reducer

Para evitar _prop drilling_ e manter a lógica de estado previsível:

- Utilizei `useReducer` para centralizar as transições de estado complexas
  (iniciar task, interromper, finalizar, trocar configurações).
- A lógica de negócio pura reside no reducer, facilitando testes e manutenção.

### 3. Persistência e Recuperação

- O estado da aplicação é persistido no `localStorage`. Ao recarregar a página,
  o `TaskContextProvider` reidrata o estado, permitindo que o usuário não perca
  suas configurações ou histórico.

### 4. Clean Code e Organização

O projeto segue uma estrutura modular:

- `adapters/`: Camada para isolar dependências externas (ex: `showMessage`).
- `models/`: Definições de tipos TypeScript para garantir consistência de dados.
- `templates/`: Componentes de layout reutilizáveis.
- `utils/`: Funções puras auxiliares (formatação, ordenação).

## ✨ Funcionalidades

- **Ciclos Automáticos:** Gerenciamento inteligente de Foco -> Pausa Curta ->
  Pausa Longa (a cada 4 ciclos).
- **Histórico Detalhado:** Registro de tarefas completas e interrompidas.
- **Ordenação:** Tabela de histórico ordenável por nome, duração ou data.
- **Configuração Customizável:** O usuário define os tempos de foco e pausas.
- **Feedback Sonoro:** Alerta de áudio ao finalizar um ciclo.
- # **Responsividade:** Interface adaptável para dispositivos móveis e desktop.
  A interface foi projetada para ser limpa e direta, com feedback visual claro
  do estado atual do ciclo.

|                    Home (Timer & Foco)                     |                Configurações (Personalização)                 |
| :--------------------------------------------------------: | :-----------------------------------------------------------: |
| ![Página Inicial](./screenshots/chronos-pomodoro-home.png) | ![Configurações](./screenshots/chronos-pomodoro-settings.png) |
|                  **Histórico de Tarefas**                  |                        **Página 404**                         |
|  ![Histórico](./screenshots/chronos-pomodoro-history.png)  |     ![Not Found](./screenshots/chronos-pomodoro-page.png)     |

## 🧠 Engenharia e Decisões Arquiteturais

Este não é apenas mais um timer. A arquitetura foi pensada para resolver
problemas comuns em aplicações de cronometragem baseadas em browser e para
garantir escalabilidade.

### 1. Precisão Temporal com Web Workers

Navegadores modernos reduzem a prioridade de execução de JavaScript em abas
inativas (throttling), o que faz com que `setInterval` ou `setTimeout` comuns
percam precisão, atrasando o timer.

- **Solução:** Implementei um **Web Worker** dedicado (`timerWorker.js`). O
  contador roda em uma thread separada (background thread), garantindo que o
  tempo seja contabilizado corretamente mesmo se o usuário mudar de aba ou
  minimizar o navegador.
- **Padrão Singleton:** A classe `TimerWorkerManager` utiliza o padrão Singleton
  para garantir que exista apenas uma instância do Worker gerenciando o tempo em
  toda a aplicação.

### 2. Gestão de Estado com Context API + Reducer

Para evitar _prop drilling_ e manter a lógica de estado previsível:

- Utilizei `useReducer` para centralizar as transições de estado complexas
  (iniciar task, interromper, finalizar, trocar configurações).
- A lógica de negócio pura reside no reducer, facilitando testes e manutenção.

### 3. Persistência e Recuperação

- O estado da aplicação é persistido no `localStorage`. Ao recarregar a página,
  o `TaskContextProvider` reidrata o estado, permitindo que o usuário não perca
  suas configurações ou histórico.

### 4. Clean Code e Organização

O projeto segue uma estrutura modular:

- `adapters/`: Camada para isolar dependências externas (ex: `showMessage`).
- `models/`: Definições de tipos TypeScript para garantir consistência de dados.
- `templates/`: Componentes de layout reutilizáveis.
- `utils/`: Funções puras auxiliares (formatação, ordenação).

## ✨ Funcionalidades

- **Ciclos Automáticos:** Gerenciamento inteligente de Foco -> Pausa Curta ->
  Pausa Longa (a cada 4 ciclos).
- **Histórico Detalhado:** Registro de tarefas completas e interrompidas.
- **Ordenação:** Tabela de histórico ordenável por nome, duração ou data.
- **Configuração Customizável:** O usuário define os tempos de foco e pausas.
- **Feedback Sonoro:** Alerta de áudio ao finalizar um ciclo.
- **Responsividade:** Interface adaptável para dispositivos móveis e desktop.
  > > > > > > > 95fadf876d7739870be1c2435a1eb0de8cf20304

## 🚀 Como rodar o projeto

Pré-requisitos: Node.js instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/RuanC4rlos/chronos-pomodoro.git

# 2. Entre na pasta
cd chronos-pomodoro

# 3. Instale as dependências
npm install
# ou
yarn install

# 4. Rode o servidor de desenvolvimento
npm run dev
<<<<<<< HEAD
```

=======

> > > > > > > 95fadf876d7739870be1c2435a1eb0de8cf20304
