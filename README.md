
  <h1>🏠 HomeReserve – API RESTful estilo Airbnb</h1>

  <p>O <strong>HomeReserve</strong> é uma API desenvolvida em <strong>Node.js</strong> com <strong>Express</strong> e <strong>MongoDB</strong> utilizando o Mongoose, inspirada no modelo do Airbnb. A aplicação permite o gerenciamento completo de usuários, propriedades e reservas com autenticação JWT.</p>

  <h2>🚀 Funcionalidades</h2>
  <ul>
    <li>Cadastro e autenticação de usuários</li>
    <li>CRUD de propriedades (imóveis)</li>
    <li>Reservas com verificação de disponibilidade</li>
    <li>Upload de imagens via <code>multer</code></li>
  </ul>

  <h2>🧰 Tecnologias Utilizadas</h2>
  <ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>MongoDB + Mongoose</li>
    <li>JWT (JSON Web Token)</li>
    <li>Multer (upload de arquivos)</li>
    <li>Nodemon (ambiente de desenvolvimento)</li>
  </ul>

  <h2>📁 Estrutura do Projeto</h2>
  <ul>
    <li><code>src/</code> – Controladores, rotas e modelos</li>
    <li><code>uploads/</code> – Armazenamento local de imagens</li>
    <li><code>server.js</code> – Ponto de entrada do servidor</li>
  </ul>

  <h2>⚙️ Instalação</h2>
  <pre><code>git clone https://github.com/DevPedro77/HomeReserve.git
cd HomeReserve
npm install
npm start</code></pre>

  <h2>🛡️ Autenticação</h2>
  <p>Utiliza <strong>JWT</strong> com middleware de proteção para rotas autenticadas. O token é enviado no cabeçalho das requisições usando <code>Authorization: Bearer &lt;token&gt;</code>.</p>

  <h2>📫 Contato</h2>
  <p>Desenvolvido por <strong>Pedro Castro</strong>. Confira o projeto completo no <a href="https://github.com/DevPedro77/HomeReserve" target="_blank">GitHub</a>.</p>

</body>
</html>
