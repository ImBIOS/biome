// not a regular expression
/\1(a)/;
regExp("\\1(a)");
new Regexp("\\1(a)", "u");
RegExp.foo("\\1(a)", "u");
new foo.RegExp("\\1(a)");
// unknown pattern
RegExp(p);
new RegExp(p, "u");
RegExp(`\\1(a)${suffix}`);
new RegExp(`${prefix}\\\\1(a)`);
// TODO
// not the global RegExp
// let RegExp; new RegExp('\\1(a)');;
// function foo() { var RegExp; RegExp('\\1(a)', 'u'); };
// function foo(RegExp) { new RegExp('\\1(a)'); };
// if (foo) { const RegExp = bar; RegExp('\\1(a)'); };
// /* globals RegExp:off */ new RegExp("\\1(a)");
// {
// 	code: RegExp('\\1(a)'),
// 	globals: { RegExp: "off" },
// };
// no capturing groups
/(?:)/;
/(?:a)/;
new RegExp("");
RegExp("(?:a)|(?:b)*");
/^ab|[cd].\n$/;
// no backreferences
/(a)/;
RegExp("(a)|(b)");
new RegExp("\\n\\d(a)");
/\0(a)/;
/\0(a)/u;
/(?<=(a))(b)(?=(c))/;
/(?<!(a))(b)(?!(c))/;
/(?<foo>a)/;
// not really a backreference
RegExp("\1(a)"); // string octal escape
RegExp("\\\\1(a)"); // escaped backslash
/\\1(a)/; // // escaped backslash
/\1/; // group 1 doesn't exist, this is a regex octal escape
/^\1$/; // group 1 doesn't exist, this is a regex octal escape
/\2(a)/; // group 2 doesn't exist, this is a regex octal escape
/\1(?:a)/; // group 1 doesn't exist, this is a regex octal escape
/\1(?=a)/; // group 1 doesn't exist, this is a regex octal escape
/\1(?!a)/; // group 1 doesn't exist, this is a regex octal escape
/^[\1](a)$/; // \N in a character class is a regex octal escape
new RegExp("[\\1](a)"); // \N in a character class is a regex octal escape
/\11(a)/; // regex octal escape \11, regex matches "\x09a"
/\k<foo>(a)/; // without the 'u' flag and any named groups this isn't a syntax error, matches "k<foo>a"
/^(a)\1\2$/; // \1 is a backreference, \2 is an octal escape sequence.
// Valid backreferences: correct position, after the group
/(a)\1/;
/(a).\1/;
RegExp("(a)\\1(b)");
/(a)(b)\2(c)/;
/(?<foo>a)\k<foo>/;
new RegExp("(.)\\1");
RegExp("(a)\\1(?:b)");
/(a)b\1/;
/((a)\2)/;
/((a)b\2c)/;
/^(?:(a)\1)$/;
/^((a)\2)$/;
/^(((a)\3))|b$/;
/a(?<foo>(.)b\2)/;
/(a)?(b)*(\1)(c)/;
/(a)?(b)*(\2)(c)/;
/(?<=(a))b\1/;
/(?<=(?=(a)\1))b/;
// Valid backreferences: correct position before the group when they're both in the same lookbehind
/(?<!\1(a))b/;
/(?<=\1(a))b/;
/(?<!\1.(a))b/;
/(?<=\1.(a))b/;
/(?<=(?:\1.(a)))b/;
/(?<!(?:\1)((a)))b/;
/(?<!(?:\2)((a)))b/;
/(?=(?<=\1(a)))b/;
/(?=(?<!\1(a)))b/;
/(.)(?<=\2(a))b/;
// Valid backreferences: not a reference into another alternative
/^(a)\1|b/;
/^a|(b)\1/;
/^a|(b|c)\1/;
/^(a)|(b)\2/;
/^(?:(a)|(b)\2)$/;
/^a|(?:.|(b)\1)/;
/^a|(?:.|(b).(\1))/;
/^a|(?:.|(?:(b)).(\1))/;
/^a|(?:.|(?:(b)|c).(\1))/;
/^a|(?:.|(?:(b)).(\1|c))/;
/^a|(?:.|(?:(b)|c).(\1|d))/;
// Valid backreferences: not a reference into a negative lookaround (reference from within the same lookaround is allowed)
/.(?=(b))\1/;
/.(?<=(b))\1/;
/a(?!(b)\1)./;
/a(?<!\1(b))./;
/a(?!(b)(\1))./;
/a(?!(?:(b)\1))./;
/a(?!(?:(b))\1)./;
/a(?<!(?:\1)(b))./;
/a(?<!(?:(?:\1)(b)))./;
/(?<!(a))(b)(?!(c))\2/;
/a(?!(b|c)\1)./;
// ignore regular expressions with syntax errors
RegExp("\\1(a)["); // \1 would be an error, but the unterminated [ is a syntax error
new RegExp("\\1(a){", "u"); // \1 would be an error, but the unterminated { is a syntax error because of the 'u' flag
new RegExp("\\1(a)\\2", "ug"); // \1 would be an error, but \2 is syntax error because of the 'u' flag
const flags = "gus";
RegExp("\\1(a){", flags); // \1 would be an error, but the rule is aware of the 'u' flag so this is a syntax error
RegExp("\\1(a)\\k<foo>", "u"); // \1 would be an error, but \k<foo> produces syntax error because of the u flag
new RegExp("\\k<foo>(?<foo>a)\\k<bar>"); // \k<foo> would be an error, but \k<bar> produces syntax error because group <bar> doesn't exist
