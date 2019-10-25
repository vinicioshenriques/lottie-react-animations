# Animações com lottie no react native.

## Iniciar o projeto React Native

`react-native init lottiern`

### Adicionar as libs do lottie ao projeto.

```
yarn add lottie-react-native
yarn add lottie-ios@3.1.3
```

### Caso esteja utilizando ios, entrar na pasta ios do projeto e editar o arquivo Podfile adicionando a seguinte linha

`use_frameworks!`

### e depois executar o comando

`pod install`

### Depois, ir ao [site](https://lottiefiles.com/) da biblioteca de animações do lottie e escolher uma animação, baixar em formato json. Como este é apenas um exemplo, deixarei o arquivo nomeado como **_animation.json_** e colocarei na pasta raiz do projeto.

### No projeto, onde queremos adicionar a animação, devemos importar o componente do Lottie, e a animação.

```
import Lottie from 'lottie-react-native';
import rocket from './animation.json';
```

### Adicionar o componente do Lottie com as seguintes props:

`source` onde será adicionada a animação.

`autoSize` para dimensionamento automático

`resizeMode` como `contain` para a animação se adaptar ao tamanho do container

`autoPlay` para a animação iniciar automaticamente

`loop` para que a animação continue executando indefinidamente

`<Lottie source={rocket} autoSize resizeMode="contain" autoPlay loop />`
