import { jest, describe, it, expect, beforeEach } from "@jest/globals";
import { VendaService } from "../src/vendaService.js";

// =====================================================
// TODO 1: Padrão Factory
// =====================================================
const criarUsuarioValido = (sobrescritas = {}) => {
    const usuarioPadrao = {
        id: 1,
        name: "Usuário Teste",
        ativo: true
    };

    return {
        ...usuarioPadrao, // Retornamos o usuário Padrão 
        ...sobrescritas}; // E também os dados sobreescritos
};


// =====================================================
// Testes
// =====================================================
describe("VendaService", () => {
  let vendaService;
  let repositorioFake;


// HOOK BEFOREEACH  
  beforeEach(() => {
    repositorioFake = {
        salvar: jest.fn()
    };

    vendaService = new VendaService(repositorioFake);
  });


  // CENÁRIO DE SUCESSO
  describe("processarVenda() - Cenários de Sucesso", () => {

    // Aplicando 10% de desconto
    it("deve aplicar 10% de desconto corretamente ao usar o cupom PROMO10", async () => {

      // ARRANGE: Crio o usuário, valor total e tipo do cupom
    const usuario = criarUsuarioValido();
    const valorTotal = 200;
    const cupom = "PROMO10";
     
      // ACT: Chamo o método processarVenda da classe vendaService usando await
      const resultado = await vendaService.processarVenda(usuario, valorTotal, cupom);

      // ASSERT: Verifico se o valorFinal é 180 e se o método salvar do repositório foi chamado
      expect(repositorioFake.salvar).toHaveBeenCalledWith( // Vefirica se a função simulada (mock) foi chamada com argumentos específicos
        expect.objectContaining({ // Nesse caso, o argumento é verificar se ele contém o objeto valorFinal: 180 na função de processarVenda dentro service
            valorFinal: 180
        })
      );

    });

    // Processando Venda sem Cupom
    it("deve processar a venda sem desconto quando nenhum cupom for informado", async () => {

      // ARRANGE: Criamos o cenário sem cupom
      const usuario = criarUsuarioValido();
      const valorTotal = 100;

      // ACT: Executamos a chamada
      await vendaService.processarVenda(usuario, valorTotal);

      // ASSERT: Garantimos que o valor final é igual ao valor original
      expect(repositorioFake.salvar).toHaveBeenCalledWith(
        expect.objectContaining({
            valorFinal: 100
        })
      );

    });

  });


  // CENÁRIO DE EXCEÇÃO
  describe("processarVenda() - Cenários de Exceção", () => {

    // Erro: Usuário Inativo
    it("deve lançar um erro quando o usuário estiver inativo", async () => {

      // ARRANGE: Criando usuário inativo usando o ({ ativo: false })
      const usuarioInativo = criarUsuarioValido({ativo: false});

      // ACT & ASSERT: Sintaxe do 'await expect(...).rejects.toThrow(...)' para validar a mensagem "Usuário inválido ou inativo."
      await expect(vendaService.processarVenda(usuarioInativo, 100)).rejects.toThrow("Usuário inválido ou inativo.");
      
    });

    // Erro: Valor da Venda <= 0
    it("deve lançar um erro quando o valor da venda for menor ou igual a zero", async () => {

      // ARRANGE: Definindo usuário e o valorTotal como 0
      const usuario = criarUsuarioValido();
      const valorTotal = 0;

      // ACT & ASSERT: Validando o lançamento da exceção "O valor da venda deve ser maior que zero."
      await expect(vendaService.processarVenda(usuario, valorTotal)).rejects.toThrow("O valor da venda deve ser maior que zero.");

    });

  });

});