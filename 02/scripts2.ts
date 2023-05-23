interface Usuario {
  nome: string;
  idade: number;
  status: boolean;
}

const lista: Usuario[] = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

const filtroDeUsuariosPeloNome = (
  usuarios: Usuario[],
  filtro: string
): Usuario[] => {
  const resultado = usuarios.filter((usuario) => {
    return usuario.nome.toLowerCase().includes(filtro.toLowerCase());
  });
  return resultado;
};
const usuariosComGuNoNome = filtroDeUsuariosPeloNome(lista, "gu");
console.log(usuariosComGuNoNome);

const usuariosComJoNoNome = filtroDeUsuariosPeloNome(lista, "jo");
console.log(usuariosComJoNoNome);
