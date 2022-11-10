rinobot = {

    'MembroEfetivo' : ['Drive', 'Repositorio', 'Candidaturas'],
    'MembroColaborador' : ['Drive',  'Repositorio'],
    'ExMembro' : ['Drive']
}

def main():
    name = input("Digite seu nome: ")
    cargo = input("Digite seu cargo dentro da equipe Rinobot: ")

    if cargo == 'membro efetivo':
        print("Ola", name)
        res = str(rinobot['MembroEfetivo'])[1:-1]
        print("Voce tem acesso ao: ", res )
    elif cargo == 'membro colaborador':
        print("Ola", name)
        res = str(rinobot['MembroColaborador'])[1:-1]
        print("Voce tem acesso ao: ", res )
    elif cargo == "ex membro":
        print("Ola", name)
        res = str(rinobot['ExMembro'])[1:-1]
        print("Ficamos felizes por ter feito parte da nossa equipe. Voce tem acesso apenas ao: ", res )
    else:
        print("Cargo não encontrado!")

if __name__ == "__main__":
    main()

