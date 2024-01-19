O projeto é composto por Javascript e 2 frameworks (React, typeScript) e estruturado com HTML5 e CSS3.
Contendo 3 páginas, sendo elas: uma página de login, uma de cadastro do usuário e uma de recuperação de senha.

Página de Login:
1. Caso o usuário já possua cadastro, ele terá dois campos para preencher: E-mail e Senha.
2. Caso o usuário não possua cadastro, haverá um campo denominado "Cadastre-se" que automaticamente o direciona para a  tela de cadastro.

Página de Cadastro:
1. Caso o usuário for realizar o cadastro, a página contém os seguintes campos para preenchimento: Nome, E-mail, Senha e Confirmar Senha.
2. Se o usuário não colocar um e-mail válido, o campo vai gerar uma mensagem de erro, especificando o que não está correto. 
3. No momento de cadastrar a senha, se caso a senha e a confirmação de senha não forem iguais, o campo vai gerar uma mensagem de erro.

Página de Recuperação de Senha: 
A página contém apenas um campo para o cliente colocar um e-mail já cadastrado, e um botão que quando selecionado, enviará um token diretamente ao e-mail do usuário especificado no campo,
para que ele possa realizar a recuperação da senha. (no caso o token enviado, o Back-End é responsável).

