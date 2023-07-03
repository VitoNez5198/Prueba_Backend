const request = require('supertest');
const app = require('../index');

describe('Operaciones CRUD de cafés', () => {
    test("debe devolver un status code 200 y un arreglo con al menos 1 objeto al hacer una solicitud GET a /cafes", async () => {
        const response = await request(app).get("/cafes");

        // Verificar el status code
        expect(response.status).toBe(200);
        
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });


    test("debe devolver un código 404 al intentar eliminar un café inexistente con DELETE a /cafes/:id", async () => {
        const response = await request(app).delete("/cafes/100");

        // Verificar el status code
        expect(response.status).toBe(404);
    });


    test("debe devolver un código 201 al agregar un nuevo café con POST a /cafes", async () => {
        const newCafe = { id: 5, nombre: "Café con leche" };
        const response = await request(app).post("/cafes").send(newCafe);

        // Verificar el status code
        expect(response.status).toBe(201);
    });


    test("debe devolver un status code 400 al intentar actualizar un café con id diferente al especificado en PUT a /cafes/:id", async () => {
        const cafeId = 1;
        const updatedCafe = { id: 2, nombre: "Café americano" };
        const response = await request(app).put(`/cafes/${cafeId}`).send(updatedCafe);

        // Verificar el status code
        expect(response.status).toBe(400);
    });

});
