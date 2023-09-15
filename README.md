# JsonWebToken.

A curiosidade me pediu pra aprender o funcionamento do JWT e aí está! Versão usando React + Vite e Node.js.

O código em si é simples, mas para uma primeira abordagem, é um grande ensinamento e contei com ajuda do canal do youtube PedroTech para o desenvolvimento da aplicação.

# Trejetória de compreendimento do código e da API:

1. Criar uma tela de registro de login de um usuário (sem estilos) - optei por React + Vite.
2. Usando node.js, criei uma requisição de (POST) para gravar um novo usuário no DB - Mysql + Xampp. - Bcrypt foi usado para converter a senha em hash e ser salva no banco.
3. No frontend, foi criada uma função que envia os dados usando Axios como método de requisição.
4. Adicionalmente, uma função de login foi criada no backend (GET) e frontend para permitir a autenticação de um usuário no sistema. Usando Bcrypt (compare), é possível comparar a senha do banco com a senha inserida pelo usuário na hora do login.
5. Usando Cookies e criando uma session (express), foi possível salvar a sessão autenticada no navegador para manter um usuário logado por um determinado período.
6. Agora, entra o JWT e a criação de um token de autenticação. Essa verificação acontece antes da requisição de GET ir ao banco de dados procurar o usuário, afim de verificar se já existe ou não uma antenticação registrada.
7. Caso exista uma autenticação, o token é verificado e permite o login do usuário. Do contrário, uma mensagem de não autorizado ou autenticado é enviada.
8. Só é possível acessar o sistema o usuário que possúi um token validado e tenha inserido seus dados de acesso corretamente.
