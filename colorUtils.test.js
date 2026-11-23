function validateColor(color)
{
    return typeof color === "string" && color.trim() !== "";
}

test("accepts a valid color", () =>
{
    expect(validateColor("Blue")).toBe(true);
});

test("rejects an empty color", () =>
{
    expect(validateColor("")).toBe(false);
});

