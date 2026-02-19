/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
const sv = t => `<span class="kw">${t}</span>`;
const sf = t => `<span class="fn">${t}</span>`;
const ss = t => `<span class="str">${t}</span>`;
const sn = t => `<span class="num">${t}</span>`;
const sc = t => `<span class="cmt">${t}</span>`;
const sb = () => `<span class="blank">___</span>`;

/* ─────────────────────────────────────────────
   CHAPTER 1 — 33 PROBLEMS
───────────────────────────────────────────── */
const ch1 = [
    {
        id: 1,
        title: "Name & Greet",
        topic: "variables",
        difficulty: "easy",
        desc: "Create a variable to store your name, then use it to build a greeting message.",
        code: `${
            sv('let')
        } name = ${
            sb()
        };
${
            sv('let')
        } greeting = ${'<span class="str">"Hello, "</span>'} + ${
            sb()
        } + ${'<span class="str">"!"</span>'};
console.${
            sf('log')
        }(greeting);`,
        guidance: ["Assign your <strong>name</strong> as a string using quotes: <code>\"Your Name\"</code>", "Use the <strong>+</strong> operator to join strings — this is called <strong>concatenation</strong>", "Refer to the variable by name (no quotes!) in the second line", "Expected output: <code>Hello, Alex!</code>"]
    },

    {
        id: 2,
        title: "const vs let",
        topic: "declarations",
        difficulty: "easy",
        desc: "Declare a birthYear with const (it never changes) and an age with let. Then update the age by 1.",
        code: `${
            sv('const')
        } birthYear = ${
            sb()
        };
${
            sv('let')
        } age = ${
            sb()
        };

age = age + ${
            sn('1')
        }; ${
            sc('// birthday!')
        }
console.${
            sf('log')
        }(${'<span class="str">"Next year you\'ll be:"</span>'}, age);`,
        guidance: ["Use <code>const</code> for values that <strong>never change</strong>", "Use <code>let</code> for values that <strong>can change</strong>", "Try reassigning <code>birthYear</code> — notice the TypeError? That's <code>const</code> protecting it!", "Fill in real numbers: e.g., <code>birthYear = 2001</code> and <code>age = 23</code>"]
    },

    {
        id: 3,
        title: "var Hoisting Trap",
        topic: "declarations",
        difficulty: "medium",
        desc: "Predict what logs before fixing it. var is hoisted — understand why this is tricky vs let.",
        code: `console.${
            sf('log')
        }(score); ${
            sc('// What prints here?')
        }
${
            sv('var')
        } score = ${
            sn('100')
        };
console.${
            sf('log')
        }(score); ${
            sc('// And here?')
        }

${
            sc('// Now try with let:')
        }
console.${
            sf('log')
        }(points); ${
            sc('// What happens?')
        }
${
            sv('let')
        } points = ${
            sn('50')
        };`,
        guidance: ["<code>var</code> is <strong>hoisted</strong> — declaration moves to top, but NOT the value", "First <code>console.log(score)</code> prints <code>undefined</code>, not 100", "<code>let</code> stays in a <strong>Temporal Dead Zone</strong> — accessing it early throws a <code>ReferenceError</code>", "Run the var version first, then try the let version"]
    },

    {
        id: 4,
        title: "Scope Detective",
        topic: "scope",
        difficulty: "medium",
        desc: "Figure out which variables are accessible where. Fill in what each console.log prints.",
        code: `${
            sv('let')
        } city = ${'<span class="str">"Paris"</span>'}; ${
            sc('// global')
        }

${
            sv('function')
        } ${
            sf('travel')
        }() {
  ${
            sv('let')
        } hotel = ${'<span class="str">"Grand"</span>'}; ${
            sc('// local')
        }
  console.${
            sf('log')
        }(city);  ${
            sc('// prints: ___')
        }
  console.${
            sf('log')
        }(hotel); ${
            sc('// prints: ___')
        }
}

${
            sf('travel')
        }();
console.${
            sf('log')
        }(city);  ${
            sc('// prints: ___')
        }
console.${
            sf('log')
        }(hotel); ${
            sc('// prints: ___')
        }`,
        guidance: ["<strong>Global scope</strong>: accessible everywhere", "<strong>Local scope</strong>: only lives inside the function", "<code>city</code> is global → accessible inside and outside", "<code>hotel</code> is local → accessing outside causes <code>ReferenceError</code>"]
    }, {
        id: 5,
        title: "Block Scope with let",
        topic: "scope",
        difficulty: "medium",
        desc: "Explore how let and var behave differently inside an if block.",
        code: `${
            sv('if')
        } (${
            sv('true')
        }) {
  ${
            sv('var')
        } x = ${
            sn('10')
        };
  ${
            sv('let')
        } y = ${
            sn('20')
        };
}

console.${
            sf('log')
        }(x); ${
            sc('// prints: ___')
        }
console.${
            sf('log')
        }(y); ${
            sc('// prints: ___')
        }`,
        guidance: ["<code>var</code> has <strong>function scope</strong> — leaks out of if blocks and loops", "<code>let</code> has <strong>block scope</strong> — stays inside <code>{ }</code>", "<code>x</code> prints 10, but <code>y</code> throws a <code>ReferenceError</code>", "This is why modern JS prefers <code>let</code> and <code>const</code> over <code>var</code>"]
    }, {
        id: 6,
        title: "Type Check",
        topic: "types",
        difficulty: "easy",
        desc: "Use typeof to inspect different values. Fill in what typeof will return for each.",
        code: `console.${
            sf('log')
        }(${
            sv('typeof')
        } ${
            sn('42')
        });         ${
            sc('// ___')
        }
console.${
            sf('log')
        }(${
            sv('typeof')
        } ${'<span class="str">"hello"</span>'});    ${
            sc('// ___')
        }
console.${
            sf('log')
        }(${
            sv('typeof')
        } ${
            sv('true')
        });       ${
            sc('// ___')
        }
console.${
            sf('log')
        }(${
            sv('typeof')
        } ${
            sv('undefined')
        }); ${
            sc('// ___')
        }
console.${
            sf('log')
        }(${
            sv('typeof')
        } ${
            sv('null')
        });      ${
            sc('// ⚠️ surprise!')
        }
console.${
            sf('log')
        }(${
            sv('typeof')
        } [${
            sn('1')
        },${
            sn('2')
        },${
            sn('3')
        }]);   ${
            sc('// ⚠️ surprise!')
        }`,
        guidance: ["<code>typeof</code> returns a string like <code>\"number\"</code>, <code>\"string\"</code>, <code>\"boolean\"</code>", "<code>typeof null</code> returns <code>\"object\"</code> — a historic JS bug!", "<code>typeof []</code> also returns <code>\"object\"</code> — arrays are objects in JS", "To check for arrays use: <code>Array.isArray([])</code> → <code>true</code>"]
    }, {
        id: 7,
        title: "String ↔ Number Conversion",
        topic: "types",
        difficulty: "easy",
        desc: "Convert between strings and numbers. Spot the type coercion trap!",
        code: `${
            sv('let')
        } strNum = ${'<span class="str">"42"</span>'};
${
            sv('let')
        } realNum = ${
            sf('Number')
        }(strNum);
console.${
            sf('log')
        }(realNum + ${
            sn('8')
        }); ${
            sc('// should be 50')
        }

${
            sv('let')
        } n = ${
            sn('100')
        };
${
            sv('let')
        } s = ${
            sf('String')
        }(n);
console.${
            sf('log')
        }(s + ${'<span class="str">"px"</span>'}); ${
            sc('// "100px"')
        }

${
            sc('// 🚨 Coercion trap:')
        }
console.${
            sf('log')
        }(${'<span class="str">"5"</span>'} + ${
            sn('3')
        }); ${
            sc('// "53" or 8?')
        }
console.${
            sf('log')
        }(${'<span class="str">"5"</span>'} - ${
            sn('3')
        }); ${
            sc('// "53" or 2?')
        }`,
        guidance: ["<code>Number(\"42\")</code> converts string → number", "<code>String(100)</code> or <code>100 + \"\"</code> converts number → string", "<strong>Trap</strong>: <code>+</code> with a string triggers concatenation → <code>\"5\" + 3 = \"53\"</code>", "But <code>-</code> forces numeric conversion → <code>\"5\" - 3 = 2</code>"]
    }, {
        id: 8,
        title: "Arithmetic Operators",
        topic: "operators",
        difficulty: "easy",
        desc: "Use +, -, *, /, % to calculate a receipt. Fill in the blanks.",
        code: `${
            sv('let')
        } price    = ${
            sn('80')
        };
${
            sv('let')
        } discount = ${
            sn('15')
        };
${
            sv('let')
        } tax      = ${
            sn('0.1')
        };

${
            sv('let')
        } afterDiscount = price ${
            sb()
        } discount;
${
            sv('let')
        } taxAmount     = afterDiscount ${
            sb()
        } tax;
${
            sv('let')
        } total         = afterDiscount ${
            sb()
        } taxAmount;
${
            sv('let')
        } remainder     = total ${
            sb()
        } ${
            sn('3')
        };

console.${
            sf('log')
        }(${'<span class="str">"Total:"</span>'}, total);
console.${
            sf('log')
        }(${'<span class="str">"Remainder:"</span>'}, remainder);`,
        guidance: ["Use <code>-</code> to subtract the discount", "Use <code>*</code> to multiply for the tax amount", "Use <code>+</code> to add tax to the subtotal", "Use <code>%</code> (modulo) to get the remainder when splitting by 3"]
    }, {
        id: 9,
        title: "Comparison Operators",
        topic: "operators",
        difficulty: "medium",
        desc: "Use == vs === — predict each result before running.",
        code: `console.${
            sf('log')
        }(${
            sn('5')
        } == ${'<span class="str">"5"</span>'});   ${
            sc('// ___ (loose)')
        }
console.${
            sf('log')
        }(${
            sn('5')
        } === ${'<span class="str">"5"</span>'}); ${
            sc('// ___ (strict)')
        }
console.${
            sf('log')
        }(${
            sn('5')
        } === ${
            sn('5')
        });  ${
            sc('// ___')
        }
console.${
            sf('log')
        }(${
            sn('0')
        } == ${
            sv('false')
        }); ${
            sc('// ___')
        }
console.${
            sf('log')
        }(${
            sn('0')
        } === ${
            sv('false')
        });${
            sc('// ___')
        }
console.${
            sf('log')
        }(${'<span class="str">""</span>'} == ${
            sv('false')
        }); ${
            sc('// ___')
        }`,
        guidance: [
            "<code>==</code> is <strong>loose equality</strong> — converts types before comparing",
            "<code>===</code> is <strong>strict equality</strong> — value AND type must match",
            "<code>5 == \"5\"</code> is <code>true</code> (string converted to number)",
            "<code>5 === \"5\"</code> is <code>false</code> (number ≠ string type)",
            "<strong>Best practice</strong>: always use <code>===</code>!"
        ]
    }, {
        id: 10,
        title: "Logical Operators",
        topic: "operators",
        difficulty: "medium",
        desc: "Fill in &&, ||, ! to make each statement work correctly.",
        code: `${
            sv('let')
        } isLoggedIn = ${
            sv('true')
        };
${
            sv('let')
        } isAdmin    = ${
            sv('false')
        };

${
            sc('// logged in AND admin?')
        }
console.${
            sf('log')
        }(isLoggedIn ${
            sb()
        } isAdmin);

${
            sc('// logged in OR admin?')
        }
console.${
            sf('log')
        }(isLoggedIn ${
            sb()
        } isAdmin);

${
            sc('// NOT an admin?')
        }
console.${
            sf('log')
        }(${
            sb()
        }isAdmin);

${
            sv('let')
        } name = ${
            sv('null')
        };
console.${
            sf('log')
        }(name || ${'<span class="str">"Guest"</span>'}); ${
            sc('// ___')
        }`,
        guidance: ["<code>&&</code> (AND) — both sides must be truthy", "<code>||</code> (OR) — at least one side must be truthy", "<code>!</code> (NOT) — flips the boolean", "<strong>Short-circuit</strong>: <code>null || \"Guest\"</code> → <code>\"Guest\"</code> because null is falsy"]
    }, {
        id: 11,
        title: "String Methods",
        topic: "functions",
        difficulty: "easy",
        desc: "Use built-in string methods to transform and inspect a sentence.",
        code: `${
            sv('let')
        } s = ${'<span class="str">"  JavaScript is Awesome!  "</span>'};

console.${
            sf('log')
        }(s.${
            sf('trim')
        }());
console.${
            sf('log')
        }(s.${
            sf('toLowerCase')
        }());
console.${
            sf('log')
        }(s.${
            sf('toUpperCase')
        }());
console.${
            sf('log')
        }(s.${
            sf('includes')
        }(${'<span class="str">"Awesome"</span>'}));
console.${
            sf('log')
        }(s.${
            sf('replace')
        }(${'<span class="str">"Awesome"</span>'}, ${'<span class="str">"Cool"</span>'}));
console.${
            sf('log')
        }(s.${
            sf('length')
        }); ${
            sc('// property, not method!')
        }`,
        guidance: [
            "<code>.trim()</code> removes whitespace from both ends",
            "<code>.toLowerCase()</code> / <code>.toUpperCase()</code> change the case",
            "<code>.includes()</code> returns <code>true</code> or <code>false</code>",
            "<code>.replace(old, new)</code> swaps the first occurrence",
            "<code>.length</code> is a <strong>property</strong> — no parentheses!"
        ]
    }, {
        id: 12,
        title: "Number Methods & Math",
        topic: "functions",
        difficulty: "easy",
        desc: "Use the Math object and Number methods to work with numeric values.",
        code: `${
            sv('let')
        } price = ${
            sn('19.956')
        };

console.${
            sf('log')
        }(price.${
            sf('toFixed')
        }(${
            sn('2')
        }));
console.${
            sf('log')
        }(Math.${
            sf('round')
        }(${
            sn('4.6')
        }));
console.${
            sf('log')
        }(Math.${
            sf('floor')
        }(${
            sn('4.9')
        }));
console.${
            sf('log')
        }(Math.${
            sf('ceil')
        }(${
            sn('4.1')
        }));
console.${
            sf('log')
        }(Math.${
            sf('max')
        }(${
            sn('3')
        }, ${
            sn('9')
        }, ${
            sn('1')
        }, ${
            sn('7')
        }));
console.${
            sf('log')
        }(Math.${
            sf('min')
        }(${
            sn('3')
        }, ${
            sn('9')
        }, ${
            sn('1')
        }, ${
            sn('7')
        }));
console.${
            sf('log')
        }(Math.${
            sf('random')
        }());`,
        guidance: ["<code>.toFixed(2)</code> returns a <strong>string</strong> with 2 decimal places", "<code>Math.round()</code> rounds to nearest integer", "<code>Math.floor()</code> always rounds <strong>down</strong>, <code>Math.ceil()</code> always rounds <strong>up</strong>", "<code>Math.random()</code> gives 0–1; for 1-10: <code>Math.floor(Math.random()*10)+1</code>"]
    }, {
        id: 13,
        title: "Array Methods",
        topic: "functions",
        difficulty: "medium",
        desc: "Use built-in array methods to add, remove, find, and transform items.",
        code: `${
            sv('let')
        } fruits = [${'<span class="str">"apple"</span>'}, ${'<span class="str">"banana"</span>'}, ${'<span class="str">"mango"</span>'}];

fruits.${
            sf('push')
        }(${'<span class="str">"grape"</span>'}); ${
            sc('// add to end')
        }
fruits.${
            sf('pop')
        }();               ${
            sc('// remove from end')
        }
fruits.${
            sf('unshift')
        }(${'<span class="str">"kiwi"</span>'}); ${
            sc('// add to start')
        }

console.${
            sf('log')
        }(fruits.${
            sf('indexOf')
        }(${'<span class="str">"banana"</span>'}));
console.${
            sf('log')
        }(fruits.${
            sf('includes')
        }(${'<span class="str">"mango"</span>'}));
console.${
            sf('log')
        }(fruits.${
            sf('join')
        }(${'<span class="str">" | "</span>'}));`,
        guidance: ["<code>.push()</code> adds to end; <code>.pop()</code> removes from end", "<code>.unshift()</code> adds to start; <code>.shift()</code> removes from start", "<code>.indexOf()</code> returns the position, or <code>-1</code> if not found", "<code>.join(sep)</code> converts array to string with separator between items"]
    }, {
        id: 14,
        title: "Ternary Operator",
        topic: "operators",
        difficulty: "medium",
        desc: "Rewrite an if/else as a ternary. Then write one from scratch.",
        code: `${
            sv('let')
        } age = ${
            sn('20')
        };

${
            sc('// if/else version:')
        }
${
            sv('if')
        } (age >= ${
            sn('18')
        }) {
  console.${
            sf('log')
        }(${'<span class="str">"Adult"</span>'});
} ${
            sv('else')
        } {
  console.${
            sf('log')
        }(${'<span class="str">"Minor"</span>'});
}

${
            sc('// Rewrite as ternary:')
        }
${
            sv('let')
        } status = age >= ${
            sn('18')
        } ? ${
            sb()
        } : ${
            sb()
        };
console.${
            sf('log')
        }(status);

${
            sv('let')
        } score = ${
            sn('72')
        };
${
            sv('let')
        } result = ${
            sb()
        }; ${
            sc('// Pass or Fail')
        }`,
        guidance: ["Ternary syntax: <code>condition ? valueIfTrue : valueIfFalse</code>", "Fill in <code>\"Adult\"</code> and <code>\"Minor\"</code> in the blanks", "For score: <code>score >= 50 ? \"Pass\" : \"Fail\"</code>", "Ternaries are great for simple one-liner assignments"]
    }, {
        id: 15,
        title: "Putting It All Together",
        topic: "variables",
        difficulty: "hard",
        desc: "Build a mini profile card using all Ch.1 concepts.",
        code: `${
            sv('const')
        } firstName = ${'<span class="str">"Sam"</span>'};
${
            sv('const')
        } lastName  = ${'<span class="str">"Rivera"</span>'};
${
            sv('let')
        }   age       = ${
            sn('28')
        };
${
            sv('let')
        }   score     = ${
            sn('87.456')
        };

${
            sv('let')
        } fullName = firstName + ${
            sb()
        } + lastName;
${
            sv('let')
        } initials = firstName[${
            sn('0')
        }] + ${
            sb()
        };
${
            sv('let')
        } category = age >= ${
            sn('18')
        } ? ${
            sb()
        } : ${
            sb()
        };
${
            sv('let')
        } display  = score.${
            sf('toFixed')
        }(${
            sb()
        });

console.${
            sf('log')
        }(${'<span class="str">"Name:"</span>'}, fullName.${
            sf('toUpperCase')
        }());
console.${
            sf('log')
        }(${'<span class="str">"Initials:"</span>'}, initials);
console.${
            sf('log')
        }(${'<span class="str">"Category:"</span>'}, category);
console.${
            sf('log')
        }(${'<span class="str">"Score:"</span>'}, display);`,
        guidance: [
            "Step 1: join firstName + <code>\" \"</code> + lastName",
            "Step 2: <code>lastName[0]</code> gives the first letter",
            "Step 3: ternary → <code>age >= 18 ? \"Adult\" : \"Minor\"</code>",
            "Step 4: <code>.toFixed(1)</code> → <code>87.5</code>",
            "Bonus: wrap it all in a <code>function createProfile()</code>!"
        ]
    }, {
        id: 16,
        title: "Template Literals",
        topic: "variables",
        difficulty: "easy",
        desc: "Rewrite concatenation using backtick template literals.",
        code: `${
            sv('let')
        } product = ${'<span class="str">"Laptop"</span>'};
${
            sv('let')
        } price   = ${
            sn('999')
        };
${
            sv('let')
        } qty     = ${
            sn('3')
        };

${
            sc('// Old (concatenation):')
        }
${
            sv('let')
        } msg1 = ${'<span class="str">"Item: "</span>'} + product + ${'<span class="str">", Price: $"</span>'} + price;

${
            sc('// New (template literal):')
        }
${
            sv('let')
        } msg2 = ${
            sb()
        };

${
            sc('// With expression:')
        }
${
            sv('let')
        } receipt = ${
            sb()
        }; ${
            sc('// show qty * price')
        }
console.${
            sf('log')
        }(msg2, receipt);`,
        guidance: ["Use <strong>backticks</strong> ` ` instead of quotes", "Embed variables with <code>${ }</code>: <code>\\`Item: ${product}\\`</code>", "For receipt: <code>\\`Total: $${qty * price}\\`</code> — math works inside <code>${ }</code>!", "Template literals also support multi-line strings"]
    }, {
        id: 17,
        title: "Swap Two Variables",
        topic: "variables",
        difficulty: "medium",
        desc: "Swap two variables. Try the temp variable way, then the ES6 destructuring way.",
        code: `${
            sv('let')
        } a = ${'<span class="str">"first"</span>'};
${
            sv('let')
        } b = ${'<span class="str">"second"</span>'};

${
            sc('// Method 1: temp variable')
        }
${
            sv('let')
        } temp = ${
            sb()
        };
a = ${
            sb()
        }; b = ${
            sb()
        };
console.${
            sf('log')
        }(a, b); ${
            sc('// "second" "first"')
        }

${
            sc('// Method 2: destructuring')
        }
a = ${'<span class="str">"first"</span>'}; b = ${'<span class="str">"second"</span>'};
[${
            sb()
        }, ${
            sb()
        }] = [b, a];
console.${
            sf('log')
        }(a, b); ${
            sc('// "second" "first"')
        }`,
        guidance: ["Method 1: temp = a, then a = b, then b = temp", "Without temp, you'd lose a's original value before copying it", "Method 2: <code>[a, b] = [b, a]</code> — right side evaluates first, then assigns", "This one-liner is a modern ES6 destructuring swap"]
    }, {
        id: 18,
        title: "Counter with Shorthand",
        topic: "variables",
        difficulty: "easy",
        desc: "Use shorthand assignment operators +=, *=, -=, ++, -- on a counter.",
        code: `${
            sv('let')
        } counter = ${
            sn('0')
        };

counter ${
            sb()
        }= ${
            sn('5')
        };  ${
            sc('// now 5')
        }
counter ${
            sb()
        }= ${
            sn('2')
        };  ${
            sc('// now 10')
        }
counter ${
            sb()
        }= ${
            sn('3')
        };  ${
            sc('// now 7')
        }
counter${
            sb()
        };       ${
            sc('// now 8 (increment)')
        }
counter${
            sb()
        };       ${
            sc('// now 7 (decrement)')
        }

console.${
            sf('log')
        }(${'<span class="str">"Final:"</span>'}, counter);`,
        guidance: ["<code>+=</code> adds: <code>0 += 5</code> → 5", "<code>*=</code> multiplies: <code>5 *= 2</code> → 10", "<code>-=</code> subtracts: <code>10 -= 3</code> → 7", "<code>++</code> increments by 1; <code>--</code> decrements by 1"]
    }, {
        id: 19,
        title: "const with Objects",
        topic: "declarations",
        difficulty: "medium",
        desc: "Discover that const doesn't freeze objects — only the binding.",
        code: `${
            sv('const')
        } user = { name: ${'<span class="str">"Alice"</span>'}, age: ${
            sn('25')
        } };

user.age = ${
            sn('26')
        };
console.${
            sf('log')
        }(user.age);  ${
            sc('// works or error?')
        }

user.city = ${'<span class="str">"Paris"</span>'};
console.${
            sf('log')
        }(user.city); ${
            sc('// works or error?')
        }

user = { name: ${'<span class="str">"Bob"</span>'} }; ${
            sc('// works or error?')
        }`,
        guidance: [
            "<code>const</code> prevents <strong>reassignment</strong> — not mutation",
            "Changing <code>user.age</code> is mutation — works fine!",
            "Adding <code>user.city</code> also works — the object is mutable",
            "Only <code>user = {...}</code> throws a TypeError — that's a reassignment",
            "To fully freeze: <code>Object.freeze(user)</code>"
        ]
    }, {
        id: 20,
        title: "let in a Loop",
        topic: "declarations",
        difficulty: "medium",
        desc: "Fix the classic var setTimeout loop bug by switching to let.",
        code: `${
            sc('// 🐛 Bug — all log 3!')
        }
${
            sv('for')
        } (${
            sv('var')
        } i = ${
            sn('0')
        }; i < ${
            sn('3')
        }; i++) {
  setTimeout(() => console.${
            sf('log')
        }(${'<span class="str">"var:"</span>'}, i), ${
            sn('100')
        });
}

${
            sc('// ✅ Fix with let:')
        }
${
            sv('for')
        } (${
            sb()
        } j = ${
            sn('0')
        }; j < ${
            sn('3')
        }; j++) {
  setTimeout(() => console.${
            sf('log')
        }(${'<span class="str">"let:"</span>'}, j), ${
            sn('200')
        });
}`,
        guidance: ["<code>var</code> shares ONE <code>i</code> across all iterations — by the time setTimeout runs, i = 3", "<code>let</code> creates a <strong>new binding per iteration</strong> — each callback remembers its own <code>j</code>", "Just replace <code>var</code> with <code>let</code> to fix it", "This is the #1 real-world reason to prefer <code>let</code> over <code>var</code>!"]
    }, {
        id: 21,
        title: "Choose the Right Keyword",
        topic: "declarations",
        difficulty: "hard",
        desc: "For each scenario choose var, let, or const — and explain why.",
        code: `${
            sb()
        } PI = ${
            sn('3.14159')
        };       ${
            sc('// math constant')
        }
${
            sb()
        } lives = ${
            sn('3')
        };           ${
            sc('// game lives (changes)')
        }
${
            sb()
        } MAX = ${
            sn('100')
        };           ${
            sc('// config, fixed')
        }
${
            sb()
        } result;              ${
            sc('// set later')
        }

${
            sv('function')
        } ${
            sf('getScore')
        }() {
  ${
            sb()
        } base = ${
            sn('10')
        };
  ${
            sv('return')
        } base * ${
            sn('2')
        };
}`,
        guidance: [
            "<code>const</code> → PI and MAX: values that never change",
            "<code>let</code> → lives: changes over time",
            "<code>let</code> → result: declared now without a value; const requires initialization",
            "<code>let</code> → base: local function variable",
            "<strong>Rule of thumb</strong>: default to const, use let only when you must reassign"
        ]
    }, {
        id: 22,
        title: "Closure Basics",
        topic: "scope",
        difficulty: "hard",
        desc: "A closure remembers variables from its outer scope. Complete the counter factory.",
        code: `${
            sv('function')
        } ${
            sf('makeCounter')
        }() {
  ${
            sv('let')
        } count = ${
            sn('0')
        };

  ${
            sv('return')
        } ${
            sv('function')
        }() {
    count${
            sb()
        };
    ${
            sv('return')
        } ${
            sb()
        };
  };
}

${
            sv('const')
        } counter = ${
            sf('makeCounter')
        }();
console.${
            sf('log')
        }(${
            sf('counter')
        }()); ${
            sc('// ___')
        }
console.${
            sf('log')
        }(${
            sf('counter')
        }()); ${
            sc('// ___')
        }
console.${
            sf('log')
        }(${
            sf('counter')
        }()); ${
            sc('// ___')
        }`,
        guidance: ["A <strong>closure</strong> means the inner function keeps access to <code>count</code> even after makeCounter() finishes", "Use <code>count++</code> to increment, then <code>return count</code>", "Each call increments the same <code>count</code> → logs 1, 2, 3", "Create <code>const c2 = makeCounter()</code> — it gets its own independent count!"]
    }, {
        id: 23,
        title: "Shadowing Variables",
        topic: "scope",
        difficulty: "medium",
        desc: "A local variable can shadow (hide) an outer variable with the same name.",
        code: `${
            sv('let')
        } color = ${'<span class="str">"red"</span>'};

${
            sv('function')
        } ${
            sf('paint')
        }() {
  ${
            sv('let')
        } color = ${'<span class="str">"blue"</span>'}; ${
            sc('// shadows!')
        }
  console.${
            sf('log')
        }(color); ${
            sc('// ___')
        }
}

${
            sf('paint')
        }();
console.${
            sf('log')
        }(color); ${
            sc('// ___')
        }

${
            sv('function')
        } ${
            sf('noShadow')
        }() {
  console.${
            sf('log')
        }(color); ${
            sc('// ___')
        }
}
${
            sf('noShadow')
        }();`,
        guidance: ["Inside paint(), local <code>color = \"blue\"</code> shadows the outer <code>\"red\"</code>", "JS looks up variables <strong>innermost scope first</strong>", "paint() logs <code>\"blue\"</code>; outside, global color is unchanged → <code>\"red\"</code>", "noShadow() finds no local color → walks up to global → <code>\"red\"</code>"]
    }, {
        id: 24,
        title: "Scope Chain Challenge",
        topic: "scope",
        difficulty: "hard",
        desc: "Nested functions create a scope chain. Trace what each console.log finds.",
        code: `${
            sv('let')
        } x = ${'<span class="str">"global"</span>'};

${
            sv('function')
        } ${
            sf('outer')
        }() {
  ${
            sv('let')
        } x = ${'<span class="str">"outer"</span>'};

  ${
            sv('function')
        } ${
            sf('inner')
        }() {
    ${
            sv('let')
        } x = ${'<span class="str">"inner"</span>'};
    console.${
            sf('log')
        }(x); ${
            sc('// ___')
        }
  }
  ${
            sv('function')
        } ${
            sf('middle')
        }() {
    console.${
            sf('log')
        }(x); ${
            sc('// ___')
        }
  }
  ${
            sf('inner')
        }(); ${
            sf('middle')
        }();
  console.${
            sf('log')
        }(x); ${
            sc('// ___')
        }
}

${
            sf('outer')
        }();
console.${
            sf('log')
        }(x); ${
            sc('// ___')
        }`,
        guidance: [
            "inner() has own x → logs <code>\"inner\"</code>",
            "middle() has no local x → walks up to outer's scope → <code>\"outer\"</code>",
            "Inside outer() after the calls → its own x → <code>\"outer\"</code>",
            "After outer() returns → global x untouched → <code>\"global\"</code>",
            "Scope chain: inner → outer → global — JS walks UP only"
        ]
    }, {
        id: 25,
        title: "Nullish Coalescing ??",
        topic: "operators",
        difficulty: "medium",
        desc: "Learn ?? — only triggers for null/undefined, not all falsy values like ||.",
        code: `${
            sv('let')
        } score    = ${
            sn('0')
        };
${
            sv('let')
        } username = ${'<span class="str">""</span>'};
${
            sv('let')
        } nickname = ${
            sv('null')
        };

${
            sc('// With || (bug: 0 and "" are falsy!):')
        }
console.${
            sf('log')
        }(score    || ${
            sn('100')
        });  ${
            sc('// ___')
        }
console.${
            sf('log')
        }(username || ${'<span class="str">"Anon"</span>'}); ${
            sc('// ___')
        }

${
            sc('// With ?? (only null/undefined):')
        }
console.${
            sf('log')
        }(score    ?? ${
            sn('100')
        });  ${
            sc('// ___')
        }
console.${
            sf('log')
        }(username ?? ${'<span class="str">"Anon"</span>'}); ${
            sc('// ___')
        }
console.${
            sf('log')
        }(nickname ?? ${'<span class="str">"Anon"</span>'}); ${
            sc('// ___')
        }`,
        guidance: [
            "<code>||</code> triggers for all falsy values: <code>0, \"\", false, null, undefined, NaN</code>",
            "So <code>0 || 100</code> gives 100 — treating 0 as 'no value', which is often a bug!",
            "<code>??</code> only triggers for <code>null</code> or <code>undefined</code>",
            "<code>0 ?? 100</code> gives <code>0</code> — the actual value is kept",
            "Use <code>??</code> when 0, false, or \"\" are valid real values in your data"
        ]
    }, {
        id: 26,
        title: "Optional Chaining ?.",
        topic: "operators",
        difficulty: "medium",
        desc: "Access deeply nested properties safely without crashing when something is null.",
        code: `${
            sv('const')
        } u1 = { name: ${'<span class="str">"Alice"</span>'}, address: { city: ${'<span class="str">"Paris"</span>'} } };
${
            sv('const')
        } u2 = { name: ${'<span class="str">"Bob"</span>'} };

console.${
            sf('log')
        }(u1${
            sb()
        }address${
            sb()
        }city); ${
            sc('// "Paris"')
        }
console.${
            sf('log')
        }(u2${
            sb()
        }address${
            sb()
        }city); ${
            sc('// ___')
        }

${
            sv('let')
        } city = u2${
            sb()
        }address${
            sb()
        }city ?? ${'<span class="str">"Unknown"</span>'};
console.${
            sf('log')
        }(city);`,
        guidance: ["Use <code>?.</code> between each property: <code>u1?.address?.city</code>", "If any part is null/undefined, the chain short-circuits to <code>undefined</code> (no crash!)", "Without <code>?.</code>, accessing <code>.city</code> on <code>undefined</code> throws a TypeError", "Combine with <code>??</code>: <code>u2?.address?.city ?? \"Unknown\"</code>"]
    }, {
        id: 27,
        title: "Prefix vs Postfix ++",
        topic: "operators",
        difficulty: "hard",
        desc: "Understand the difference between ++i (prefix) and i++ (postfix).",
        code: `${
            sv('let')
        } a = ${
            sn('5')
        };
${
            sv('let')
        } b = ${
            sn('5')
        };

${
            sc('// Postfix: return THEN increment')
        }
console.${
            sf('log')
        }(a++); ${
            sc('// ___')
        }
console.${
            sf('log')
        }(a);   ${
            sc('// ___')
        }

${
            sc('// Prefix: increment THEN return')
        }
console.${
            sf('log')
        }(++b); ${
            sc('// ___')
        }
console.${
            sf('log')
        }(b);   ${
            sc('// ___')
        }

${
            sv('let')
        } i = ${
            sn('3')
        };
${
            sv('let')
        } x = i++ + ++i;
console.${
            sf('log')
        }(x); ${
            sc('// ___')
        }`,
        guidance: [
            "<strong>Postfix</strong> a++: returns 5 first, then a becomes 6",
            "<strong>Prefix</strong> ++b: b becomes 6 first, then returns 6",
            "Tricky: <code>i++</code> returns 3 (i→4), then <code>++i</code> increments to 5 and returns 5",
            "So x = 3 + 5 = 8",
            "Avoid mixing prefix and postfix in the same expression — hard to read!"
        ]
    }, {
        id: 28,
        title: "Truthy & Falsy Values",
        topic: "types",
        difficulty: "medium",
        desc: "Every JS value is truthy or falsy in a boolean context. Classify each one.",
        code: `${
            sv('if')
        } (${
            sn('0')
        })        console.${
            sf('log')
        }(${'<span class="str">"0 truthy"</span>'}); ${
            sc('// ___')
        }
${
            sv('if')
        } (${'<span class="str">""</span>'})       console.${
            sf('log')
        }(${'<span class="str">"empty str truthy"</span>'}); ${
            sc('// ___')
        }
${
            sv('if')
        } (${'<span class="str">"0"</span>'})      console.${
            sf('log')
        }(${'<span class="str">"\\\"0\\\" truthy"</span>'}); ${
            sc('// ___')
        }
${
            sv('if')
        } ([])       console.${
            sf('log')
        }(${'<span class="str">"[] truthy"</span>'}); ${
            sc('// ___')
        }
${
            sv('if')
        } (${
            sv('null')
        })     console.${
            sf('log')
        }(${'<span class="str">"null truthy"</span>'}); ${
            sc('// ___')
        }
${
            sv('if')
        } (${
            sv('NaN')
        })      console.${
            sf('log')
        }(${'<span class="str">"NaN truthy"</span>'}); ${
            sc('// ___')
        }
${
            sv('if')
        } ({})       console.${
            sf('log')
        }(${'<span class="str">"{} truthy"</span>'}); ${
            sc('// ___')
        }`,
        guidance: ["The <strong>6 falsy values</strong>: <code>false, 0, \"\", null, undefined, NaN</code>", "Everything else is truthy — including <code>[]</code>, <code>{}</code>, <code>\"0\"</code>, <code>-1</code>", "<code>[]</code> is truthy (empty array is still an object!)", "Test any value: <code>Boolean(val)</code> or <code>!!val</code>"]
    }, {
        id: 29,
        title: "NaN and Infinity",
        topic: "types",
        difficulty: "medium",
        desc: "Explore two special number values — they behave surprisingly!",
        code: `${
            sv('let')
        } r1 = ${
            sn('10')
        } / ${
            sn('0')
        };
${
            sv('let')
        } r2 = -${
            sn('10')
        } / ${
            sn('0')
        };
${
            sv('let')
        } r3 = ${
            sn('0')
        } / ${
            sn('0')
        };
${
            sv('let')
        } r4 = ${
            sf('parseInt')
        }(${'<span class="str">"hello"</span>'});

console.${
            sf('log')
        }(r1);          ${
            sc('// ___')
        }
console.${
            sf('log')
        }(r2);          ${
            sc('// ___')
        }
console.${
            sf('log')
        }(r3);          ${
            sc('// ___')
        }
console.${
            sf('log')
        }(r4);          ${
            sc('// ___')
        }
console.${
            sf('log')
        }(r4 === ${
            sv('NaN')
        }); ${
            sc('// ___  ⚠️')
        }
console.${
            sf('log')
        }(${
            sf('isNaN')
        }(r4));  ${
            sc('// ___')
        }`,
        guidance: [
            "<code>10/0</code> = Infinity, <code>-10/0</code> = -Infinity (no error in JS!)",
            "<code>0/0</code> = NaN — undefined mathematically",
            "<code>parseInt(\"hello\")</code> = NaN — can't parse",
            "<strong>NaN !== NaN</strong> — it's the only value not equal to itself!",
            "Always use <code>isNaN()</code> to check for NaN"
        ]
    }, {
        id: 30,
        title: "Objects & Destructuring",
        topic: "types",
        difficulty: "hard",
        desc: "Extract values from an object using destructuring — cleaner than dot notation.",
        code: `${
            sv('const')
        } movie = {
  title: ${'<span class="str">"Inception"</span>'}, year: ${
            sn('2010')
        },
  director: ${'<span class="str">"Nolan"</span>'}, rating: ${
            sn('8.8')
        }
};

${
            sv('const')
        } { ${
            sb()
        }, ${
            sb()
        } } = movie;     ${
            sc('// get title & rating')
        }
${
            sv('const')
        } { director: ${
            sb()
        } } = movie; ${
            sc('// rename to "dir"')
        }
${
            sv('const')
        } { genre = ${
            sb()
        } } = movie;  ${
            sc('// default "Unknown"')
        }
console.${
            sf('log')
        }(title, rating, dir, genre);`,
        guidance: ["Syntax: <code>const { title, rating } = movie</code> — names must match keys", "Rename: <code>const { director: dir } = movie</code>", "Default: <code>const { genre = \"Unknown\" } = movie</code>", "Works with arrays too: <code>const [a, b] = [10, 20]</code>"]
    }, {
        id: 31,
        title: "toString(), toExponential() & length",
        topic: "functions",
        difficulty: "easy",
        desc: "Convert numbers to different base strings, scientific notation, and measure lengths.",
        code: `${
            sv('let')
        } num = ${
            sn('255')
        };
${
            sv('let')
        } big = ${
            sn('9876543')
        };

console.${
            sf('log')
        }(num.${
            sf('toString')
        }());    ${
            sc('// ___ (base 10)')
        }
console.${
            sf('log')
        }(num.${
            sf('toString')
        }(${
            sn('2')
        }));   ${
            sc('// ___ (binary)')
        }
console.${
            sf('log')
        }(num.${
            sf('toString')
        }(${
            sn('16')
        }));  ${
            sc('// ___ (hex)')
        }
console.${
            sf('log')
        }(big.${
            sf('toExponential')
        }());   ${
            sc('// ___')
        }
console.${
            sf('log')
        }(big.${
            sf('toExponential')
        }(${
            sn('2')
        })); ${
            sc('// ___ (2 decimals)')
        }

${
            sv('let')
        } word = ${'<span class="str">"JavaScript"</span>'};
console.${
            sf('log')
        }(word.${
            sf('length')
        });
console.${
            sf('log')
        }(num.${
            sf('toString')
        }().${
            sf('length')
        });`,
        guidance: [
            "<code>.toString()</code> → <code>\"255\"</code> (base 10 by default)",
            "<code>.toString(2)</code> → binary: <code>\"11111111\"</code>",
            "<code>.toString(16)</code> → hex: <code>\"ff\"</code> (used in CSS colors!)",
            "<code>.toExponential(2)</code> → <code>\"9.88e+6\"</code>",
            "<code>.length</code> is a property — no parentheses"
        ]
    }, {
        id: 32,
        title: "at(), join(), isArray() & delete",
        topic: "functions",
        difficulty: "medium",
        desc: "Access by index (including negatives!), join arrays, verify types, and delete slots.",
        code: `${
            sv('const')
        } colors = [${'<span class="str">"red"</span>'}, ${'<span class="str">"green"</span>'}, ${'<span class="str">"blue"</span>'}, ${'<span class="str">"yellow"</span>'}];

console.${
            sf('log')
        }(colors.${
            sf('at')
        }(${
            sn('0')
        }));   ${
            sc('// ___ (first)')
        }
console.${
            sf('log')
        }(colors.${
            sf('at')
        }(-${
            sn('1')
        }));  ${
            sc('// ___ (last!)')
        }
console.${
            sf('log')
        }(colors.${
            sf('at')
        }(-${
            sn('2')
        }));  ${
            sc('// ___')
        }
console.${
            sf('log')
        }(colors.${
            sf('join')
        }(${'<span class="str">", "</span>'}));
console.${
            sf('log')
        }(Array.${
            sf('isArray')
        }(colors));
console.${
            sf('log')
        }(Array.${
            sf('isArray')
        }(${'<span class="str">"hello"</span>'}));
${
            sv('delete')
        } colors[${
            sn('1')
        }];
console.${
            sf('log')
        }(colors);
console.${
            sf('log')
        }(colors.${
            sf('length')
        }); ${
            sc('// ⚠️ still 4!')
        }`,
        guidance: [
            "<code>.at(-1)</code> gets the last item — cleaner than <code>[arr.length-1]</code>",
            "<code>.join(\", \")</code> converts array to string with separator",
            "<code>Array.isArray()</code> is correct — <code>typeof []</code> wrongly returns <code>\"object\"</code>",
            "<code>delete arr[1]</code> sets that slot to <code>undefined</code> — length stays the same!",
            "Use <code>.splice()</code> to truly remove an element"
        ]
    }, {
        id: 33,
        title: "push, pop, shift, unshift, slice & splice",
        topic: "functions",
        difficulty: "medium",
        desc: "Master the core array mutation methods — add, remove, copy, and insert.",
        code: `${
            sv('let')
        } q = [${'<span class="str">"Alice"</span>'}, ${'<span class="str">"Bob"</span>'}, ${'<span class="str">"Carol"</span>'}];

q.${
            sf('push')
        }(${'<span class="str">"Dave"</span>'}); console.${
            sf('log')
        }(q);
${
            sv('let')
        } last = q.${
            sf('pop')
        }(); console.${
            sf('log')
        }(last, q);

q.${
            sf('unshift')
        }(${'<span class="str">"Zara"</span>'}); console.${
            sf('log')
        }(q);
${
            sv('let')
        } first = q.${
            sf('shift')
        }(); console.${
            sf('log')
        }(first, q);

${
            sc('// slice — non-destructive copy:')
        }
${
            sv('let')
        } part = q.${
            sf('slice')
        }(${
            sn('0')
        }, ${
            sn('2')
        });
console.${
            sf('log')
        }(part, q); ${
            sc('// original unchanged?')
        }

${
            sc('// splice — cut & insert:')
        }
q.${
            sf('splice')
        }(${
            sn('1')
        }, ${
            sn('1')
        }, ${'<span class="str">"Eve"</span>'}, ${'<span class="str">"Frank"</span>'});
console.${
            sf('log')
        }(q);`,
        guidance: [
            "<code>.push()</code> adds to end; <code>.pop()</code> removes and returns the last item",
            "<code>.unshift()</code> adds to start; <code>.shift()</code> removes and returns the first",
            "<code>.slice(0, 2)</code> returns a new array — original untouched",
            "<code>.splice(1, 1, \"Eve\", \"Frank\")</code>: at index 1, delete 1, insert Eve & Frank",
            "<strong>Memory trick</strong>: slice = safe copy; splice = surgically modifies original"
        ]
    }
];

/* ─────────────────────────────────────────────
   CHAPTER 2 — 25 PROBLEMS
───────────────────────────────────────────── */
const ch2 = [
    {
        id: 1,
        title: "Basic if / else",
        topic: "if",
        difficulty: "easy",
        desc: "Write conditions to check if a number is positive, negative, or zero.",
        code: `${
            sv('let')
        } num = -${
            sn('7')
        };

${
            sv('if')
        } (${
            sb()
        }) {
  console.${
            sf('log')
        }(${'<span class="str">"Positive"</span>'});
} ${
            sv('else if')
        } (${
            sb()
        }) {
  console.${
            sf('log')
        }(${'<span class="str">"Negative"</span>'});
} ${
            sv('else')
        } {
  console.${
            sf('log')
        }(${'<span class="str">"Zero"</span>'});
}`,
        guidance: [
            "First condition: <code>num > 0</code>",
            "Second condition: <code>num < 0</code>",
            "The <code>else</code> block runs only when both are false — meaning it must be zero",
            "Try changing num to 0, 5, and -3 to test all branches",
            "JS checks conditions <strong>top to bottom</strong> and stops at the first match"
        ]
    },

    {
        id: 2,
        title: "Grade Calculator — if / else if",
        topic: "if",
        difficulty: "easy",
        desc: "Assign a letter grade from a score using an if/else if chain.",
        code: `${
            sv('let')
        } score = ${
            sn('74')
        };
${
            sv('let')
        } grade;

${
            sv('if')
        } (score >= ${
            sb()
        }) {
  grade = ${'<span class="str">"A"</span>'};
} ${
            sv('else if')
        } (score >= ${
            sb()
        }) {
  grade = ${'<span class="str">"B"</span>'};
} ${
            sv('else if')
        } (score >= ${
            sb()
        }) {
  grade = ${'<span class="str">"C"</span>'};
} ${
            sv('else if')
        } (score >= ${
            sb()
        }) {
  grade = ${'<span class="str">"D"</span>'};
} ${
            sv('else')
        } {
  grade = ${'<span class="str">"F"</span>'};
}
console.${
            sf('log')
        }(${'<span class="str">"Grade:"</span>'}, grade); ${
            sc('// C')
        }`,
        guidance: ["Thresholds: A ≥ 90, B ≥ 80, C ≥ 70, D ≥ 60, else F", "With score = 74, the answer should be <code>\"C\"</code>", "Conditions check top-to-bottom — no upper bound needed with <code>>=</code>", "Try changing score to 95, 55, 80 to test all branches"]
    },

    {
        id: 3,
        title: "Ternary One-Liners",
        topic: "if",
        difficulty: "easy",
        desc: "Write compact one-liner conditionals using the ternary operator.",
        code: `${
            sv('let')
        } temp = ${
            sn('35')
        };
${
            sv('let')
        } age  = ${
            sn('16')
        };
${
            sv('let')
        } cart = ${
            sn('0')
        };

${
            sc('// Hot or Cold?')
        }
${
            sv('let')
        } weather = temp > ${
            sn('30')
        } ? ${
            sb()
        } : ${
            sb()
        };

${
            sc('// Can drive? (age >= 18)')
        }
${
            sv('let')
        } canDrive = ${
            sb()
        };

${
            sc('// Cart badge (hide when 0)')
        }
${
            sv('let')
        } badge = cart > ${
            sn('0')
        } ? ${'`${cart} items`'} : ${
            sb()
        };

console.${
            sf('log')
        }(weather, canDrive, badge);`,
        guidance: [
            "Ternary: <code>condition ? trueValue : falseValue</code>",
            "#1: <code>temp > 30 ? \"Hot\" : \"Cold\"</code> → <code>\"Hot\"</code>",
            "#2: <code>age >= 18 ? \"Yes\" : \"No\"</code> → <code>\"No\"</code>",
            "#3: when cart is 0, return <code>\"\"</code> or <code>null</code> to hide",
            "Ternaries are best for simple two-outcome decisions"
        ]
    },

    {
        id: 4,
        title: "Nested if Statements",
        topic: "if",
        difficulty: "medium",
        desc: "Check two conditions: is the user logged in, and are they an admin?",
        code: `${
            sv('let')
        } isLoggedIn = ${
            sv('true')
        };
${
            sv('let')
        } isAdmin    = ${
            sv('false')
        };

${
            sv('if')
        } (${
            sb()
        }) {
  console.${
            sf('log')
        }(${'<span class="str">"Welcome!"</span>'});

  ${
            sv('if')
        } (${
            sb()
        }) {
    console.${
            sf('log')
        }(${'<span class="str">"Admin panel access."</span>'});
  } ${
            sv('else')
        } {
    console.${
            sf('log')
        }(${'<span class="str">"Standard access."</span>'});
  }

} ${
            sv('else')
        } {
  console.${
            sf('log')
        }(${'<span class="str">"Please log in."</span>'});
}`,
        guidance: [
            "Outer if: checks <code>isLoggedIn</code>",
            "Inner if: checks <code>isAdmin</code> — only runs if outer check passed",
            "With true/false: prints 'Welcome!' then 'Standard access.'",
            "Try <code>isLoggedIn = false</code> to skip to the outer else",
            "Consider combining with <code>&&</code> to flatten deep nesting"
        ]
    }, {
        id: 5,
        title: "Nested Ternary",
        topic: "if",
        difficulty: "medium",
        desc: "Chain ternaries to replace an if/else if/else — then judge if it's readable!",
        code: `${
            sv('let')
        } score = ${
            sn('55')
        };

${
            sv('let')
        } result1;
${
            sv('if')
        } (score >= ${
            sn('80')
        })      result1 = ${'<span class="str">"Excellent"</span>'};
${
            sv('else if')
        } (score >= ${
            sn('60')
        }) result1 = ${'<span class="str">"Pass"</span>'};
${
            sv('else')
        }                   result1 = ${'<span class="str">"Fail"</span>'};

${
            sc('// Rewrite as nested ternary:')
        }
${
            sv('let')
        } result2 = score >= ${
            sn('80')
        } ? ${
            sb()
        }
             : score >= ${
            sn('60')
        } ? ${
            sb()
        }
             : ${
            sb()
        };

console.${
            sf('log')
        }(result1, result2);`,
        guidance: ["Fill in <code>\"Excellent\"</code>, <code>\"Pass\"</code>, <code>\"Fail\"</code>", "With score = 55: neither condition met → result is <code>\"Fail\"</code>", "Both variables should print the same value", "Nested ternaries can hurt readability — limit to 2–3 levels max"]
    }, {
        id: 6,
        title: "switch — Day Name",
        topic: "switch",
        difficulty: "easy",
        desc: "Use a switch to return the day name from a number (1–7). Complete the missing cases.",
        code: `${
            sv('let')
        } day = ${
            sn('3')
        };
${
            sv('let')
        } dayName;

${
            sv('switch')
        } (day) {
  ${
            sv('case')
        } ${
            sn('1')
        }: dayName = ${'<span class="str">"Monday"</span>'};    ${
            sv('break')
        };
  ${
            sv('case')
        } ${
            sb()
        }: dayName = ${'<span class="str">"Tuesday"</span>'};   ${
            sv('break')
        };
  ${
            sv('case')
        } ${
            sb()
        }: dayName = ${'<span class="str">"Wednesday"</span>'}; ${
            sv('break')
        };
  ${
            sv('case')
        } ${
            sn('4')
        }: dayName = ${'<span class="str">"Thursday"</span>'};  ${
            sv('break')
        };
  ${
            sv('case')
        } ${
            sn('5')
        }: dayName = ${'<span class="str">"Friday"</span>'};    ${
            sv('break')
        };
  ${
            sv('default')
        }: dayName = ${'<span class="str">"Weekend"</span>'};
}
console.${
            sf('log')
        }(dayName); ${
            sc('// "Wednesday"')
        }`,
        guidance: ["Fill in <code>2</code> for Tuesday and <code>3</code> for Wednesday", "switch uses <strong>strict equality</strong> (===) to compare each case", "<code>break</code> stops execution — without it, code <strong>falls through</strong> to the next case!", "<code>default</code> runs if no case matches — like else"]
    }, {
        id: 7,
        title: "switch — Season Fall-Through",
        topic: "switch",
        difficulty: "medium",
        desc: "Group months by season using intentional fall-through — multiple cases, one action.",
        code: `${
            sv('let')
        } month = ${
            sn('4')
        }; ${
            sc('// April')
        }

${
            sv('switch')
        } (month) {
  ${
            sv('case')
        } ${
            sn('12')
        }: ${
            sv('case')
        } ${
            sn('1')
        }: ${
            sv('case')
        } ${
            sn('2')
        }:
    console.${
            sf('log')
        }(${'<span class="str">"Winter"</span>'}); ${
            sv('break')
        };

  ${
            sv('case')
        } ${
            sb()
        }: ${
            sv('case')
        } ${
            sb()
        }: ${
            sv('case')
        } ${
            sb()
        }:
    console.${
            sf('log')
        }(${'<span class="str">"Spring"</span>'}); ${
            sv('break')
        };

  ${
            sv('case')
        } ${
            sn('6')
        }: ${
            sv('case')
        } ${
            sn('7')
        }: ${
            sv('case')
        } ${
            sn('8')
        }:
    console.${
            sf('log')
        }(${'<span class="str">"Summer"</span>'}); ${
            sv('break')
        };

  ${
            sv('default')
        }:
    console.${
            sf('log')
        }(${'<span class="str">"Autumn"</span>'});
}`,
        guidance: [
            "Spring months: 3 (March), 4 (April), 5 (May)",
            "Cases with no break between them <strong>fall through</strong> to share the same action",
            "This is intentional fall-through — a useful grouping pattern",
            "With month = 4: matches case 4, falls to 'Spring'",
            "The single break prevents falling into Summer"
        ]
    }, {
        id: 8,
        title: "switch — String Commands",
        topic: "switch",
        difficulty: "medium",
        desc: "Build a simple text command processor using a switch with string cases.",
        code: `${
            sv('let')
        } command = ${'<span class="str">"start"</span>'};

${
            sv('switch')
        } (command) {
  ${
            sv('case')
        } ${
            sb()
        }:
    console.${
            sf('log')
        }(${'<span class="str">"▶ Game started!"</span>'});
    ${
            sv('break')
        };
  ${
            sv('case')
        } ${'<span class="str">"pause"</span>'}:
    console.${
            sf('log')
        }(${'<span class="str">"⏸ Game paused."</span>'});
    ${
            sv('break')
        };
  ${
            sv('case')
        } ${
            sb()
        }:
    console.${
            sf('log')
        }(${'<span class="str">"⏹ Game stopped."</span>'});
    ${
            sv('break')
        };
  ${
            sv('case')
        } ${'<span class="str">"restart"</span>'}:
    console.${
            sf('log')
        }(${'<span class="str">"🔄 Restarting..."</span>'});
    ${
            sv('break')
        };
  ${
            sv('default')
        }:
    console.${
            sf('log')
        }(${'<span class="str">"❓ Unknown command."</span>'});
}`,
        guidance: [
            "Fill in <code>\"start\"</code> and <code>\"stop\"</code> for the two blanks",
            "switch works with strings too — uses strict equality (===)",
            "With <code>command = \"start\"</code>: prints '▶ Game started!'",
            "Try setting command to 'reset' — it should hit the default case",
            "switch is great when you have many exact string/number matches"
        ]
    }, {
        id: 9,
        title: "for Loop Basics",
        topic: "loops",
        difficulty: "easy",
        desc: "Write a for loop to count from 1 to 5, then loop over an array.",
        code: `${
            sc('// Count 1 to 5:')
        }
${
            sv('for')
        } (${
            sv('let')
        } i = ${
            sb()
        }; i <= ${
            sb()
        }; i++) {
  console.${
            sf('log')
        }(i);
}

${
            sc('// Loop over array:')
        }
${
            sv('const')
        } animals = [${'<span class="str">"cat"</span>'}, ${'<span class="str">"dog"</span>'}, ${'<span class="str">"bird"</span>'}];
${
            sv('for')
        } (${
            sv('let')
        } i = ${
            sn('0')
        }; i < animals.${
            sf('length')
        }; i++) {
  console.${
            sf('log')
        }(animals[${
            sb()
        }]);
}`,
        guidance: [
            "For loop syntax: <code>for (init; condition; update)</code>",
            "Count 1 to 5: start at <code>i = 1</code>, condition <code>i <= 5</code>",
            "For array: start at <code>i = 0</code>, go while <code>i < animals.length</code>",
            "Access each item with <code>animals[i]</code>",
            "Array indexes start at 0 — the last index is <code>length - 1</code>"
        ]
    }, {
        id: 10,
        title: "while Loop",
        topic: "loops",
        difficulty: "easy",
        desc: "Use a while loop to simulate a countdown and a dice roller.",
        code: `${
            sc('// Countdown from 5:')
        }
${
            sv('let')
        } count = ${
            sn('5')
        };
${
            sv('while')
        } (${
            sb()
        }) {
  console.${
            sf('log')
        }(count);
  count${
            sb()
        };
}
console.${
            sf('log')
        }(${'<span class="str">"Blast off! 🚀"</span>'});

${
            sc('// Roll dice until we get 6:')
        }
${
            sv('let')
        } roll = ${
            sn('0')
        };
${
            sv('let')
        } attempts = ${
            sn('0')
        };
${
            sv('while')
        } (roll !== ${
            sn('6')
        }) {
  roll = Math.${
            sf('floor')
        }(Math.${
            sf('random')
        }() * ${
            sn('6')
        }) + ${
            sn('1')
        };
  attempts++;
}
console.${
            sf('log')
        }(${'`Rolled 6 in ${attempts} tries!`'});`,
        guidance: [
            "while syntax: <code>while (condition) { ... }</code>",
            "Condition: <code>count > 0</code> — loop runs as long as count is above zero",
            "Update: <code>count--</code> decrements inside the loop to avoid infinite looping!",
            "Dice: <code>Math.floor(Math.random() * 6) + 1</code> gives a random 1–6",
            "Make sure every while loop has a way to eventually become false"
        ]
    }, {
        id: 11,
        title: "do-while Loop",
        topic: "loops",
        difficulty: "medium",
        desc: "Use do-while to guarantee the body runs at least once — even if the condition is false.",
        code: `${
            sc('// Always runs at least once:')
        }
${
            sv('let')
        } num = ${
            sn('10')
        };

${
            sv('do')
        } {
  console.${
            sf('log')
        }(${'<span class="str">"num is:"</span>'}, num);
  num += ${
            sn('10')
        };
} ${
            sv('while')
        } (${
            sb()
        }); ${
            sc('// stop when num >= 50')
        }

${
            sc('// Real use: input validation simulation')
        }
${
            sv('let')
        } input = ${'<span class="str">""</span>'};
${
            sv('let')
        } attempts = ${
            sn('0')
        };
${
            sv('do')
        } {
  input = attempts === ${
            sn('0')
        } ? ${'<span class="str">""</span>'} : ${'<span class="str">"hello"</span>'};
  attempts++;
} ${
            sv('while')
        } (${
            sb()
        });
console.${
            sf('log')
        }(${'`Got valid input after ${attempts} attempts`'});`,
        guidance: [
            "<strong>do-while</strong> runs the block first, checks the condition after",
            "The body always executes at least once — unlike while",
            "For countdown: condition is <code>num < 50</code>",
            "For input: condition is <code>input === \"\"</code> — keep looping while input is empty",
            "do-while is great for 'run once, then check if we need to repeat'"
        ]
    }, {
        id: 12,
        title: "for...of Loop",
        topic: "loops",
        difficulty: "easy",
        desc: "Use for...of to iterate over arrays and strings without index tracking.",
        code: `${
            sv('const')
        } fruits = [${'<span class="str">"apple"</span>'}, ${'<span class="str">"banana"</span>'}, ${'<span class="str">"mango"</span>'}];

${
            sc('// Loop over array values:')
        }
${
            sv('for')
        } (${
            sv('const')
        } ${
            sb()
        } ${
            sv('of')
        } fruits) {
  console.${
            sf('log')
        }(${
            sb()
        });
}

${
            sc('// Loop over a string (char by char):')
        }
${
            sv('const')
        } word = ${'<span class="str">"CODE"</span>'};
${
            sv('for')
        } (${
            sv('const')
        } char ${
            sv('of')
        } word) {
  console.${
            sf('log')
        }(char);
}

${
            sc('// Sum all numbers:')
        }
${
            sv('const')
        } nums = [${
            sn('10')
        }, ${
            sn('20')
        }, ${
            sn('30')
        }];
${
            sv('let')
        } total = ${
            sn('0')
        };
${
            sv('for')
        } (${
            sv('const')
        } n ${
            sv('of')
        } nums) total ${
            sb()
        }= n;
console.${
            sf('log')
        }(${'<span class="str">"Total:"</span>'}, total);`,
        guidance: [
            "<code>for...of</code> gives you the <strong>value directly</strong> — no index needed",
            "Fill in <code>fruit</code> and use it in the log",
            "It works on any iterable: arrays, strings, Sets, Maps",
            "For string: each character is accessed one by one",
            "For the sum: use <code>+=</code> to accumulate"
        ]
    }, {
        id: 13,
        title: "break — Stop a Loop Early",
        topic: "control",
        difficulty: "medium",
        desc: "Use break to exit a loop as soon as you find what you're looking for.",
        code: `${
            sv('const')
        } names = [${'<span class="str">"Alice"</span>'}, ${'<span class="str">"Bob"</span>'}, ${'<span class="str">"Carol"</span>'}, ${'<span class="str">"Dave"</span>'}];
${
            sv('const')
        } target = ${'<span class="str">"Carol"</span>'};
${
            sv('let')
        } found = ${
            sv('false')
        };

${
            sv('for')
        } (${
            sv('let')
        } i = ${
            sn('0')
        }; i < names.${
            sf('length')
        }; i++) {
  ${
            sv('if')
        } (names[i] === target) {
    console.${
            sf('log')
        }(${'`Found ${target} at index ${i}!`'});
    found = ${
            sv('true')
        };
    ${
            sb()
        };  ${
            sc('// stop searching')
        }
  }
}

${
            sv('if')
        } (!found) console.${
            sf('log')
        }(${'<span class="str">"Not found."</span>'});`,
        guidance: [
            "<code>break</code> immediately exits the loop — no more iterations run",
            "Fill in <code>break</code> inside the if block",
            "Without break, the loop would keep running needlessly after finding Carol",
            "<strong>Common use</strong>: search loops, input processing, finding first match",
            "<code>break</code> only exits the <strong>innermost</strong> loop it's inside"
        ]
    }, {
        id: 14,
        title: "continue — Skip an Iteration",
        topic: "control",
        difficulty: "medium",
        desc: "Use continue to skip specific iterations while letting the loop keep running.",
        code: `${
            sc('// Print only odd numbers 1-10:')
        }
${
            sv('for')
        } (${
            sv('let')
        } i = ${
            sn('1')
        }; i <= ${
            sn('10')
        }; i++) {
  ${
            sv('if')
        } (i % ${
            sn('2')
        } === ${
            sn('0')
        }) {
    ${
            sb()
        };  ${
            sc('// skip evens')
        }
  }
  console.${
            sf('log')
        }(i);
}

${
            sc('// Skip items that start with "B":')
        }
${
            sv('const')
        } items = [${'<span class="str">"Apple"</span>'}, ${'<span class="str">"Banana"</span>'}, ${'<span class="str">"Blueberry"</span>'}, ${'<span class="str">"Mango"</span>'}];
${
            sv('for')
        } (${
            sv('const')
        } item ${
            sv('of')
        } items) {
  ${
            sv('if')
        } (item.${
            sf('startsWith')
        }(${'<span class="str">"B"</span>'})) ${
            sb()
        };
  console.${
            sf('log')
        }(item);
}`,
        guidance: [
            "<code>continue</code> skips the rest of the current iteration and moves to the next",
            "Fill in <code>continue</code> in both blanks",
            "For odds: <code>i % 2 === 0</code> catches evens → skip them",
            "For items: <code>.startsWith(\"B\")</code> catches Banana and Blueberry → skip them",
            "Unlike break, continue doesn't exit the loop — just skips one round"
        ]
    }, {
        id: 15,
        title: "break & continue Together",
        topic: "control",
        difficulty: "hard",
        desc: "Combine break and continue in a loop to skip some values and stop at a target.",
        code: `${
            sv('const')
        } scores = [${
            sn('45')
        }, ${
            sn('72')
        }, ${
            sn('33')
        }, ${
            sn('91')
        }, ${
            sn('60')
        }, ${
            sn('88')
        }];

${
            sv('for')
        } (${
            sv('let')
        } i = ${
            sn('0')
        }; i < scores.${
            sf('length')
        }; i++) {
  ${
            sc('// Skip scores below 50:')
        }
  ${
            sv('if')
        } (scores[i] < ${
            sn('50')
        }) {
    console.${
            sf('log')
        }(${'`Skipping ${scores[i]}`'});
    ${
            sb()
        };
  }

  ${
            sc('// Stop if we hit a perfect score (>=90):')
        }
  ${
            sv('if')
        } (scores[i] >= ${
            sn('90')
        }) {
    console.${
            sf('log')
        }(${'`Found top score: ${scores[i]} — stopping!`'});
    ${
            sb()
        };
  }

  console.${
            sf('log')
        }(${'`Valid score: ${scores[i]}`'});
}`,
        guidance: [
            "First blank: <code>continue</code> — skip scores below 50 and move to next iteration",
            "Second blank: <code>break</code> — stop the entire loop when we hit 91",
            "Trace: 45 → skip; 72 → valid; 33 → skip; 91 → found! stop",
            "Scores after 91 (60, 88) are never processed because break exits",
            "This pattern is common in data processing — filter + early exit"
        ]
    }, {
        id: 16,
        title: "for Loop — Print 0 to 4",
        topic: "loops",
        difficulty: "easy",
        desc: "Use a for loop to print the numbers 0, 1, 2, 3, 4 to the console.",
        code: `${
            sv('for')
        } (${
            sv('let')
        } i = ${
            sn('0')
        }; i < ${
            sb()
        }; i++) {
  console.${
            sf('log')
        }(i);
}`,
        guidance: ["Start at <code>i = 0</code>", "Keep looping while <code>i < 5</code> so 0,1,2,3,4 are printed", "Use <code>i++</code> to move to the next number", "This is the most common loop pattern for counting"]
    }, {
        id: 17,
        title: "for Loop — Sum 1 to 10",
        topic: "loops",
        difficulty: "easy",
        desc: "Use a for loop to add the numbers from 1 to 10 and log the total.",
        code: `${
            sv('let')
        } total = ${
            sn('0')
        };
${
            sv('for')
        } (${
            sv('let')
        } i = ${
            sn('1')
        }; i <= ${
            sn('10')
        }; i++) {
  total ${
            sb()
        } i;
}
console.${
            sf('log')
        }(${'<span class="str">"Sum:"</span>'}, total); ${
            sc('// 55')
        }`,
        guidance: ["Start with <code>total = 0</code>", "Loop from <code>i = 1</code> to <code>i <= 10</code>", "Add each <code>i</code> to total: <code>total += i</code>", "The answer should be 1+2+...+10 = 55"]
    }, {
        id: 18,
        title: "for Loop — Print Each Letter",
        topic: "loops",
        difficulty: "easy",
        desc: "Loop through a string and print each character on its own line.",
        code: `${
            sv('let')
        } word = ${'<span class="str">"Hi"</span>'};
${
            sv('for')
        } (${
            sv('let')
        } i = ${
            sn('0')
        }; i < word.${
            sf('length')
        }; i++) {
  console.${
            sf('log')
        }(word[${
            sb()
        }]);
}`,
        guidance: ["Strings have a <code>.length</code> property", "Use <code>word[i]</code> to get the character at index i", "Start at 0 and go while <code>i < word.length</code>", "You'll see 'H' then 'i' logged"]
    }, {
        id: 19,
        title: "for Loop — Count Backwards",
        topic: "loops",
        difficulty: "easy",
        desc: "Use a for loop to print 5, 4, 3, 2, 1 (backwards).",
        code: `${
            sv('for')
        } (${
            sv('let')
        } i = ${
            sn('5')
        }; i >= ${
            sn('1')
        }; i${
            sb()
        }) {
  console.${
            sf('log')
        }(i);
}`,
        guidance: ["Start at <code>i = 5</code>", "Condition: <code>i >= 1</code> so we include 1", "Use <code>i--</code> to decrease by 1 each time", "Same loop structure, just different start and step"]
    }, {
        id: 20,
        title: "for Loop — Even Numbers Only",
        topic: "loops",
        difficulty: "easy",
        desc: "Print only the even numbers from 2 to 10 (2, 4, 6, 8, 10).",
        code: `${
            sv('for')
        } (${
            sv('let')
        } i = ${
            sn('2')
        }; i <= ${
            sn('10')
        }; i ${
            sb()
        }= ${
            sn('2')
        }) {
  console.${
            sf('log')
        }(i);
}`,
        guidance: ["Start at 2, the first even number", "Use <code>i += 2</code> to jump by 2 each time", "Condition <code>i <= 10</code> includes 10", "You can also use <code>if (i % 2 === 0)</code> inside a 1–10 loop"]
    }, {
        id: 21,
        title: "for Loop — Array of Squares",
        topic: "loops",
        difficulty: "easy",
        desc: "Build an array containing the squares of 1, 2, 3, 4, 5 using a for loop.",
        code: `${
            sv('let')
        } squares = [];
${
            sv('for')
        } (${
            sv('let')
        } i = ${
            sn('1')
        }; i <= ${
            sn('5')
        }; i++) {
  squares.${
            sf('push')
        }(i ${
            sb()
        } i);
}
console.${
            sf('log')
        }(squares); ${
            sc('// [1, 4, 9, 16, 25]')
        }`,
        guidance: ["Start with an empty array <code>[]</code>", "<code>.push(value)</code> adds to the end of the array", "Each element is <code>i * i</code> (i squared)", "Loop from 1 to 5 inclusive"]
    }, {
        id: 22,
        title: "for Loop — Nested Loop (Grid)",
        topic: "loops",
        difficulty: "easy",
        desc: "Use two for loops to print a 3x3 grid: three rows, three asterisks per row.",
        code: `${
            sv('for')
        } (${
            sv('let')
        } row = ${
            sn('0')
        }; row < ${
            sn('3')
        }; row++) {
  ${
            sv('let')
        } line = ${'<span class="str">""</span>'};
  ${
            sv('for')
        } (${
            sv('let')
        } col = ${
            sn('0')
        }; col < ${
            sn('3')
        }; col++) {
    line ${
            sb()
        } ${'<span class="str">"*"</span>'};
  }
  console.${
            sf('log')
        }(line);
}`,
        guidance: ["Outer loop: 3 rows (row = 0, 1, 2)", "Inner loop: 3 asterisks per row (col = 0, 1, 2)", "Build a string with <code>line += \"*\"</code>", "You'll see '***' logged three times"]
    }, {
        id: 23,
        title: "while Loop — Print 1 to 5",
        topic: "loops",
        difficulty: "easy",
        desc: "Use a while loop to print the numbers 1, 2, 3, 4, 5.",
        code: `${
            sv('let')
        } n = ${
            sn('1')
        };
${
            sv('while')
        } (${
            sb()
        }) {
  console.${
            sf('log')
        }(n);
  n++;
}
${sc('// Stop when n becomes 6')}`,
        guidance: ["Start with <code>n = 1</code>", "Condition: <code>n <= 5</code> so we print 1 through 5", "Don't forget <code>n++</code> or the loop never ends!", "while is great when you don't know the count in advance"]
    }, {
        id: 24,
        title: "while Loop — Sum Until 20",
        topic: "loops",
        difficulty: "easy",
        desc: "Add numbers 1, 2, 3, ... with a while loop until the sum is greater than 20. Log the sum.",
        code: `${
            sv('let')
        } sum = ${
            sn('0')
        };
${
            sv('let')
        } num = ${
            sn('1')
        };
${
            sv('while')
        } (${
            sb()
        }) {
  sum += num;
  num++;
}
console.${
            sf('log')
        }(${'<span class="str">"Sum:"</span>'}, sum);`,
        guidance: ["Keep looping while <code>sum <= 20</code> (or <code>sum < 21</code>)", "Add <code>num</code> to sum, then increment num", "When sum exceeds 20, the condition fails and we exit", "Result will be 1+2+3+4+5+6 = 21"]
    }, {
        id: 25,
        title: "while Loop — First Multiple of 7",
        topic: "loops",
        difficulty: "easy",
        desc: "Start at 1 and use a while loop to find the first number divisible by 7. Log it.",
        code: `${
            sv('let')
        } x = ${
            sn('1')
        };
${
            sv('while')
        } (x % ${
            sn('7')
        } !== ${
            sn('0')
        }) {
  x++;
}
console.${
            sf('log')
        }(${'<span class="str">"First multiple of 7:"</span>'}, x); ${
            sc('// 7')
        }`,
        guidance: ["<code>x % 7</code> is the remainder when x is divided by 7", "Loop while the remainder is not 0 (not divisible)", "Increment <code>x++</code> until we hit 7", "7 % 7 === 0, so we stop and log 7"]
    }
];

/* ─────────────────────────────────────────────
   RENDER ENGINE + LOCALSTORAGE PERSISTENCE
───────────────────────────────────────────── */
const STORAGE_KEY = 'js-workout-solved';

function loadSolvedFromStorage() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return { ch1: [], ch2: [] };
        const data = JSON.parse(raw);
        return {
            ch1: Array.isArray(data.ch1) ? data.ch1 : [],
            ch2: Array.isArray(data.ch2) ? data.ch2 : []
        };
    } catch (e) {
        return { ch1: [], ch2: [] };
    }
}

function saveSolvedToStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            ch1: [...solvedIds.ch1],
            ch2: [...solvedIds.ch2]
        }));
    } catch (e) {}
}

const saved = loadSolvedFromStorage();
const solvedIds = {
    ch1: new Set(saved.ch1),
    ch2: new Set(saved.ch2)
};

function dots(level) {
    const m = {
        easy: 1,
        medium: 2,
        hard: 3
    };
    return [1, 2, 3].map(
        i => `<div class="dot ${
            i <= m[level] ? 'lit ' + level : ''
        }"></div>`
    ).join('');
}

function renderCard(p, chapter, delay) {
    const chKey = 'ch' + chapter;
    return `
  <div class="card" data-id="${
        p.id
    }" data-topic="${
        p.topic
    }" style="animation-delay:${delay}s">
    <div class="card-header">
      <span class="problem-num">#${
        String(p.id).padStart(2, '0')
    }</span>
      <span class="problem-title">${
        p.title
    }</span>
      <span class="topic-tag tag-${
        p.topic
    }">${
        p.topic
    }</span>
    </div>
    <div class="card-body">
      <p class="problem-desc">${
        p.desc
    }</p>
      <div class="code-block">${
        p.code
    }</div>
      <button class="guidance-toggle" onclick="toggleG(this)">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        💡 Show Guidance
      </button>
      <div class="guidance-panel">
        <ol>${
        p.guidance.map(g => `<li>${g}</li>`).join('')
    }</ol>
      </div>
    </div>
    <div class="card-footer">
      <div class="difficulty">${
        dots(p.difficulty)
    }</div>
      <button class="done-btn" onclick="toggleSolved(this,${
        p.id
    },'${chKey}')">
        <span>✓</span> Mark as Solved
      </button>
    </div>
  </div>`;
}

// Render chapters
document.getElementById('ch1-grid').innerHTML = ch1.map((p, i) => renderCard(p, 1, i * 0.04)).join('');
document.getElementById('ch2-grid').innerHTML = ch2.map((p, i) => renderCard(p, 2, i * 0.04)).join('');

// Restore solved state from localStorage into the DOM
function restoreSolvedUI() {
    ['ch1', 'ch2'].forEach(function (chKey) {
        var gridId = chKey === 'ch1' ? 'ch1-grid' : 'ch2-grid';
        solvedIds[chKey].forEach(function (id) {
            var card = document.querySelector('#' + gridId + ' .card[data-id="' + id + '"]');
            if (card) {
                card.classList.add('solved');
                var btn = card.querySelector('.done-btn');
                if (btn) {
                    btn.classList.add('solved');
                    btn.innerHTML = '<span>🎉</span> Solved!';
                }
            }
        });
    });
}
restoreSolvedUI();

/* ─────────────────────────────────────────────
   CHAPTER NAVIGATION (Ch2 locked until Ch1 all solved)
───────────────────────────────────────────── */
function updateChapter2Lock() {
    const ch2Tab = document.querySelector('.ch-tab[data-chapter="2"]');
    if (!ch2Tab) return;
    const ch1Complete = solvedIds.ch1.size >= ch1.length;
    if (ch1Complete) {
        ch2Tab.classList.remove('ch-tab-locked');
        ch2Tab.classList.add('ch-tab-unlocked');
        ch2Tab.setAttribute('aria-disabled', 'false');
        ch2Tab.title = 'Control Statements';
    } else {
        ch2Tab.classList.add('ch-tab-locked');
        ch2Tab.classList.remove('ch-tab-unlocked');
        ch2Tab.setAttribute('aria-disabled', 'true');
        ch2Tab.title = 'Complete all ' + ch1.length + ' Chapter 1 problems to unlock';
    }
}

document.querySelectorAll('.ch-tab').forEach(btn => {
    btn.addEventListener('click', () => {
        const ch = btn.dataset.chapter;
        if (ch === '2' && btn.classList.contains('ch-tab-locked')) return;
        document.querySelectorAll('.ch-tab').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.ch-section').forEach(s => s.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('chapter-' + ch).classList.add('active');
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});
updateChapter2Lock();

/* ─────────────────────────────────────────────
   FILTER BUTTONS
───────────────────────────────────────────── */
function setupFilter(barId, gridId) {
    document.querySelectorAll(`#${barId} .filter-btn`).forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll(`#${barId} .filter-btn`).forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const topic = btn.dataset.topic;
            document.querySelectorAll(`#${gridId} .card`).forEach(card => {
                card.classList.toggle('hidden', topic !== 'all' && card.dataset.topic !== topic);
            });
        });
    });
}
setupFilter('ch1-filter-bar', 'ch1-grid');
setupFilter('ch2-filter-bar', 'ch2-grid');

/* ─────────────────────────────────────────────
   GUIDANCE TOGGLE
───────────────────────────────────────────── */
function toggleG(btn) {
    const panel = btn.nextElementSibling;
    btn.classList.toggle('open');
    panel.classList.toggle('open');
    btn.innerHTML = btn.classList.contains('open') ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg> 💡 Hide Guidance' : '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg> 💡 Show Guidance';
}

/* ─────────────────────────────────────────────
   SOLVED TRACKING
───────────────────────────────────────────── */
function toggleSolved(btn, id, chKey) {
    const card = btn.closest('.card');
    const set = solvedIds[chKey];
    if (set.has(id)) {
        set.delete(id);
        card.classList.remove('solved');
        btn.classList.remove('solved');
        btn.innerHTML = '<span>✓</span> Mark as Solved';
    } else {
        set.add(id);
        card.classList.add('solved');
        btn.classList.add('solved');
        btn.innerHTML = '<span>🎉</span> Solved!';
    }
    updateProgress();
    saveSolvedToStorage();
}

function updateProgress() {
    const d1 = solvedIds.ch1.size,
        t1 = ch1.length;
    const d2 = solvedIds.ch2.size,
        t2 = ch2.length;
    document.getElementById('ch1-prog-text').textContent = `${d1} / ${t1} solved`;
    document.getElementById('ch1-prog-fill').style.width = `${(d1 / t1) * 100}%`;
    document.getElementById('ch2-prog-text').textContent = `${d2} / ${t2} solved`;
    document.getElementById('ch2-prog-fill').style.width = `${(d2 / t2) * 100}%`;
    document.getElementById('total-count').textContent = d1 + d2;
    updateChapter2Lock();
}

// Initial sync after restoring solved state from localStorage
updateProgress();
