function power(a, b, p) {
  if (b == 1) return a;
  else return Math.pow(a, b) % p;
}

// Chaves publicas e privadas
var P, G, x, a, y, b, ka, kb;

P = 30803;
G = 9;

// Chave privada da Alice
a = 4;

// Gerando uma chave com P e G
x = power(G, a, P);

// Chave privada do Bob
b = 3;

// Gerando uma chave com P e G
y = power(G, b, P);

// Gerando a chave secreta
ka = power(y, a, P); // Chave secreta da Alice
kb = power(x, b, P); // Chave secreta do Bob

console.log("Algoritmo Diffie Hellman\n");
console.log("=================================");
console.log("Valor de P: " + P);
console.log("Valor de G: " + G);
console.log("=================================\n");

console.log("=================================");
console.log("Chave privada da Alice: " + a);
console.log("Chave privada do Bob: " + b);
console.log("=================================\n");

console.log("=================================");
console.log("Chave secreta da Alice: " + ka);
console.log("Chave secreta da Bob: " + kb);
console.log("=================================\n");
