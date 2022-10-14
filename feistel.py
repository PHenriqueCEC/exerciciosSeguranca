import binascii
 
# Gera os bits
def gerar_bits(p):
     
    import random
    key = ""
    p = int(p)
     
    for i in range(p):
         
        aux = random.randint(0,1)
        aux = str(aux)
        key = key + aux
         
    return(key)

#Implementar o XOR
def xor(a,b):
     
    aux = ""
     
    for i in range(n):
         
        if (a[i] == b[i]):
            aux += "0"
             
        else:
            aux += "1"
             
    return aux

cipher = "Seguranca em sistemas de computacao"
print("Cifra: ", cipher)

