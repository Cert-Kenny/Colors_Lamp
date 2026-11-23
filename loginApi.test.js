test("Login API returns valid JSON", async () =>
{
    const response = await fetch(
        "http://127.0.0.1:8000/LAMPAPI/Login.php",
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
            {
                login: "testuser",
                password: "Test123"
            })
        }
    );

    expect(response.ok).toBe(true);

    const data = await response.json();

    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("firstName");
    expect(data).toHaveProperty("lastName");
    expect(data).toHaveProperty("error");

    expect(data.id).toBeGreaterThan(0);
});

