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

    const body = await response.text();

    console.log("HTTP status:", response.status);
    console.log("API response:", body);

    expect(body.length).toBeGreaterThan(0);

    const data = JSON.parse(body);

    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("error");
});
