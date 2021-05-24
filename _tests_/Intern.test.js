
const Intern = require("../lib/Intern");

test("Set School via the constructor argument", () => {
    const testValue = "UT-Austin";
    const emp = new Intern("Zach", 1, "test@valormm.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Intern";
    const emp = new Intern("Zach", 1, "test@valormm.com", "UT-Austin");
    expect(emp.getRole()).toBe(testValue);
});

test("Get School via getSchool()", () => {
    const testValue = "UT-Austin";
    const emp = new Intern("Zach", 1, "test@valormm.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});