interface IProduto {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}

function gerarEtiquetas(info: IProduto): string[] {
  const etiquetas: string[] = [];

  for (let i = 1; i <= info.qtd; i++) {
    etiquetas.push(`${info.lote}-${info.ano}-${i.toString().padStart(3, "0")}`);
  }

  return etiquetas;
}

const produto: IProduto = {
  produto: "Notebook",
  lote: 123,
  ano: 2022,
  qtd: 10,
};
console.log(gerarEtiquetas(produto));
