Feature: Seleccionar una película de terror en Netflix
  Scenario: El usuario busca una película en la categoría terror
    Given el usuario está en la página de inicio de Netflix
    When hace clic en "Iniciar sesión"
    And ingresa su nombre de usuario
    And ingresa su contraseña
    And hace clic en "Iniciar sesión" dentro de Netflix
    And selecciona un perfil de usuario
    And hace clic en "Películas"
    And hace clic en "Géneros"
    And selecciona el género "Terror"
    And selecciona una película
    And hace clic en "Reproducir"
    Then la película se reproduce
