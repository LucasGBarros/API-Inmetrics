Feature: Inmetrics API

  Scenario: Usuário busca um produto específico por nome
    Given eu faço uma busca por um produto
    When o sistema deve retornar os produtos correspondentes
    Then o status da resposta deve ser 200

  Scenario: Usuário faz login e faz o upload de uma nova imagem para o produto
    Given eu estou logado com o usuário
    And eu faço o upload de uma nova imagem para o produto
    Then o status da resposta do upload deve ser 200