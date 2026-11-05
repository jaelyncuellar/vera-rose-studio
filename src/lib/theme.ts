

export function setTheme(theme: "light" | "dark") {
    const root = document.documentElement;
    if (theme === "dark") {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
}
export function getTheme(): "light" | "dark" {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
    }
    // Dark is the default theme; light is the toggle alternative
    return "dark";
}