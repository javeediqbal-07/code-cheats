const cheats = {
    python: {
        title: "Python",
        icon: "🐍",
        codes: [
            ["Print", `print("Hello World")`,
                "Displays text or values on the screen."],
            ["Variables", `name = "Iqbal"
age = 20
print(name, age)`,
                "Variables store data that can be used throughout a program."],
            ["Input", `name = input("Enter name: ")
print("Hello", name)`,
                "input() accepts data from the user through the keyboard."],
            ["If Else", `age = 18
if age >= 18:
    print("Eligible")
else:
    print("Not Eligible")`,
                "Checks a condition and executes the matching block of code."],
            ["For Loop", `for i in range(1, 6):
    print(i)`,
                "Repeats code for each value in a given sequence."],
            ["While Loop", `i = 1
while i <= 5:
    print(i)
    i += 1`,
                "Repeats code as long as the condition remains true."],
            ["Function", `def add(a, b):
    return a + b

print(add(5, 3))`,
                "A function is a reusable block of code that performs a specific task."],
            ["List", `numbers = [10, 20, 30, 40]
print(numbers)
print(numbers[0])`,
                "A list stores multiple items in a single variable."]
        ]
    },

    java: {
        title: "Java",
        icon: "☕",
        codes: [
            ["Print", `System.out.println("Hello World");`,
                "Prints output to the console and moves to the next line."],
            ["Variables", `int age = 20;
String name = "Iqbal";
double price = 99.5;`,
                "Variables store values using different data types."],
            ["Input", `Scanner sc = new Scanner(System.in);
int num = sc.nextInt();`,
                "Scanner is used to read input entered by the user."],
            ["If Else", `if (age >= 18) {
    System.out.println("Eligible");
} else {
    System.out.println("Not Eligible");
}`,
                "Executes different statements based on a condition."],
            ["For Loop", `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,
                "Repeats statements for a specified number of iterations."],
            ["While Loop", `int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}`,
                "Executes code repeatedly while a condition is true."],
            ["Method", `static int add(int a, int b) {
    return a + b;
}`,
                "A method contains reusable code that performs a particular operation."],
            ["Array", `int[] numbers = {10, 20, 30};
System.out.println(numbers[0]);`,
                "An array stores multiple values of the same data type."]
        ]
    },

    c: {
        title: "C Programming",
        icon: "💻",
        codes: [
            ["Print", `printf("Hello World");`,
                "Displays text or output on the screen."],
            ["Variables", `int age = 20;
float price = 99.5;
char grade = 'A';`,
                "Variables store values using different data types."],
            ["Input", `int num;
scanf("%d", &num);`,
                "scanf() reads formatted input from the user."],
            ["If Else", `if (age >= 18) {
    printf("Eligible");
} else {
    printf("Not Eligible");
}`,
                "Checks a condition to choose which block to execute."],
            ["For Loop", `for (int i = 1; i <= 5; i++) {
    printf("%d\\n", i);
}`,
                "Repeats a statement for a fixed number of times."],
            ["While Loop", `int i = 1;
while (i <= 5) {
    printf("%d\\n", i);
    i++;
}`,
                "Repeats statements while the condition evaluates to true."],
            ["Function", `int add(int a, int b) {
    return a + b;
}`,
                "A function performs a specific task and can be reused."],
            ["Array", `int numbers[] = {10, 20, 30};
printf("%d", numbers[0]);`,
                "An array stores multiple values of the same type."]
        ]
    },

    cpp: {
        title: "C++",
        icon: "🚀",
        codes: [
            ["Print", `cout << "Hello World";`,
                "Displays output using the cout statement."],
            ["Variables", `int age = 20;
string name = "Iqbal";
float price = 99.5;`,
                "Variables store data that can be accessed and modified."],
            ["Input", `int num;
cin >> num;`,
                "cin reads input entered by the user."],
            ["If Else", `if (age >= 18) {
    cout << "Eligible";
} else {
    cout << "Not Eligible";
}`,
                "Makes decisions by checking whether a condition is true or false."],
            ["For Loop", `for (int i = 1; i <= 5; i++) {
    cout << i << endl;
}`,
                "Repeats a block of statements for a fixed number of iterations."],
            ["While Loop", `int i = 1;
while (i <= 5) {
    cout << i << endl;
    i++;
}`,
                "Runs repeatedly as long as the specified condition is true."],
            ["Function", `int add(int a, int b) {
    return a + b;
}`,
                "Functions help reuse code and divide programs into smaller tasks."],
            ["Array", `int numbers[] = {10, 20, 30};
cout << numbers[0];`,
                "An array stores multiple elements of the same data type."]
        ]
    },

    html: {
        title: "HTML & CSS",
        icon: "🌐",
        codes: [
            ["HTML Structure", `<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>`,
                "HTML provides the basic structure and content of a webpage."],
            ["Headings", `<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<p>Paragraph text</p>`,
                "Heading tags create titles and subtitles of different sizes."],
            ["Link", `<a href="https://example.com">
    Visit Website
</a>`,
                "The anchor tag creates clickable links to other pages."],
            ["Image", `<img src="image.jpg" alt="My Image">`,
                "The img tag displays an image on a webpage."],
            ["CSS Colors", `body {
    background-color: lightblue;
    color: black;
}`,
                "CSS color properties change the background and text colors."],
            ["CSS Button", `button {
    background: blue;
    color: white;
    padding: 10px;
    border-radius: 8px;
}`,
                "CSS styles buttons using colors, spacing and rounded corners."],
            ["Flexbox", `.container {
    display: flex;
    justify-content: center;
    align-items: center;
}`,
                "Flexbox arranges elements and aligns them inside a container."]
        ]
    },

    javascript: {
        title: "JavaScript",
        icon: "⚡",
        codes: [
            ["Print", `console.log("Hello World");`,
                "Displays messages and values in the browser console."],
            ["Variables", `let name = "Iqbal";
const age = 20;`,
                "Variables store values. let allows reassignment while const cannot be reassigned."],
            ["Input", `let name = prompt("Enter your name");
alert("Hello " + name);`,
                "prompt() accepts user input and alert() displays a message."],
            ["If Else", `if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}`,
                "Executes different code blocks depending on a condition."],
            ["For Loop", `for (let i = 1; i <= 5; i++) {
    console.log(i);
}`,
                "Repeats code while updating a counter on every iteration."],
            ["While Loop", `let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}`,
                "Runs a block repeatedly while the condition is true."],
            ["Function", `function add(a, b) {
    return a + b;
}
console.log(add(5, 3));`,
                "A function is reusable code designed to perform a task."],
            ["Array", `let numbers = [10, 20, 30];
console.log(numbers[0]);`,
                "An array stores multiple values in a single variable."]
        ]
    }
};

// ==============================
// HTML ESCAPE
// ==============================
function safe(text) {
    return String(text).replace(/[&<>"']/g, ch => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[ch]));
}

// ==============================
// GLOBAL STATE
// ==============================
let currentLanguage = "";
let currentCodes = [];

// ==============================
// OPEN LANGUAGE
// ==============================
function showCode(language) {
    const data = cheats[language];
    if (!data) return;

    currentLanguage = language;
    currentCodes = data.codes;

    document.querySelector(".hero").classList.add("hidden");
    document.querySelector(".languages-section").classList.add("hidden");

    document.getElementById("codeSection").classList.remove("hidden");

    document.getElementById("languageIcon").textContent = data.icon;
    document.getElementById("languageTitle").textContent = data.title;
    document.getElementById("languageDescription").textContent =
        "Quick reference and simple examples for " + data.title;

    document.getElementById("codeSearch").value = "";

    renderCodes(currentCodes);
    window.scrollTo(0, 0);
}

// ==============================
// RENDER CODE + EXPLANATION
// ==============================
function renderCodes(list) {
    const area = document.getElementById("codeArea");

    if (!list.length) {
        area.innerHTML = `
            <div class="no-results">
                No topics found 🔎
            </div>`;
        return;
    }

    area.innerHTML = list.map(item => {
        const originalIndex = currentCodes.indexOf(item);

        return `
            <div class="code-card">
                <h3>${safe(item[0])}</h3>

                <pre><code>${safe(item[1])}</code></pre>

                <div class="code-explanation">
                    <span class="explanation-label">💡 Explanation</span>
                    <p>${safe(item[2])}</p>
                </div>

                <button class="copy-button"
                    onclick="copyCheat(${originalIndex})">
                    📋 Copy Code
                </button>
            </div>
        `;
    }).join("");
}

// ==============================
// COPY CODE
// ==============================
function copyCheat(index) {
    const code = currentCodes[index]?.[1];
    if (!code) return;

    navigator.clipboard.writeText(code)
        .then(() => alert("Code copied successfully! 📋"))
        .catch(() => alert("Copy failed. Please copy manually."));
}

// ==============================
// BACK TO HOME
// ==============================
function goBack() {
    document.getElementById("codeSection").classList.add("hidden");

    document.querySelector(".hero").classList.remove("hidden");
    document.querySelector(".languages-section").classList.remove("hidden");

    document.getElementById("searchInput").value = "";
    filterLanguages("");

    window.scrollTo(0, 0);
}

// ==============================
// FILTER LANGUAGES
// ==============================
function filterLanguages(query) {
    document.querySelectorAll(".card").forEach(card => {
        card.style.display =
            card.textContent.toLowerCase().includes(query.toLowerCase())
                ? ""
                : "none";
    });
}

// HOME SEARCH
document.getElementById("searchInput").addEventListener("input", function() {
    filterLanguages(this.value);
});

// TOPIC SEARCH
document.getElementById("codeSearch").addEventListener("input", function() {
    const query = this.value.toLowerCase();

    const filtered = currentCodes.filter(item =>
        item[0].toLowerCase().includes(query) ||
        item[1].toLowerCase().includes(query) ||
        item[2].toLowerCase().includes(query)
    );

    renderCodes(filtered);
});