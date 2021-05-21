<!-- Criar base de dados dentro do banco de dados -->
`npx sequelize db:create` 

<!-- Criar a migration user -->
`npx sequelize migration:create --name=create-users`

<!-- Executar as migration, dentro da base de dados -->
`npx sequelize db:migrate`