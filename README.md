 # Prueba - Cafetería Nanacao

#### Requerimientos
 
 1. Testea que la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido
es un arreglo con por lo menos 1 objeto.
2. Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que
no existe.
3. Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201.
4. Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un
café enviando un id en los parámetros que sea diferente al id dentro del payload.


 
 #### Resultado

  PASS  tests/server.spec.js
  Operaciones CRUD de cafés
  
    √ debe devolver un status code 200 y un arreglo con al menos 1 objeto al hacer una solicitud GET a /cafes (40 ms)               
    √ debe devolver un código 404 al intentar eliminar un café inexistente con DELETE a /cafes/:id (5 ms)                           
    √ debe devolver un código 201 al agregar un nuevo café con POST a /cafes (18 ms)                                                
    √ debe devolver un status code 400 al intentar actualizar un café con id diferente al especificado en PUT a /cafes/:id (5 ms)   
                                                                                                                                    
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.971 s
Ran all test suites.
