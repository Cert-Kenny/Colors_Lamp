test("Login API returns valid JSON", async () =>
{
    const response = await fetch(
        "https://notworthmoney.shop/LAMPAPI/Login.php",
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    login: "wronguser",
                    password: "wrongpass"
                }
            )
        }
    );

    const data = await response.json();

    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("error");
});

