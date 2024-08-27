# test

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

{
"name": "test",
"module": "index.ts",
"type": "module",
"scripts": {
"dev": "bun index.ts",
"build": "ls -la && bun build index.ts --compile --outfile=public/test"
},
"devDependencies": {
"@types/bun": "latest",
"bun-vercel": "^1.0.0-alpha.5"
},
"peerDependencies": {
"typescript": "^5.0.0"
}
}
