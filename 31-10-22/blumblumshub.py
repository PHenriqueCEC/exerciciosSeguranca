# p e q numeros primos divisiveis por 4 com resto 3
p: int = 97187
q: int = 103291

# s, semente inicial
s: int = 56654


n: int = p * q

x: int = (s**2) % n

b: int
i: int = 0

# Numero limite escolhido aleatoriiamente
while i < 16513:
    x = (x**2) % n
    b = x % 2
    i += 1
    print(b,end='')
print(end='\n')