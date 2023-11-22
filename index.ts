interface Pato {
    grasnar(): void;
    voar(): void;
  }
  
  // Implementação de um Pato
  class PatoSelvagem implements Pato {
    grasnar(): void {
      console.log('Pato grasnando...');
    }
  
    voar(): void {
      console.log('Pato voando...');
    }
  }
  
  interface Galinha {
    cacarejar(): void;
    voarBaixo(): void;
  }
  
  // Implementação de uma Galinha
  class GalinhaComum implements Galinha {
    cacarejar(): void {
      console.log('Galinha cacarejando...');
    }
  
    voarBaixo(): void {
      console.log('Galinha voando baixo...');
    }
  }
  
  // Adaptador: Pato para Galinha
  class AdaptadorPato implements Galinha {
    private pato: Pato;
  
    constructor(pato: Pato) {
      this.pato = pato;
    }
  
    cacarejar(): void {
      this.pato.grasnar(); // Adaptando o grasnado do pato para o cacarejo da galinha
    }
  
    voarBaixo(): void {
      this.pato.voar(); // Adaptando o voo do pato para o voo baixo da galinha
    }
  }
  
  // Classe para demonstração do Adaptador de Pato para Galinha
  class AdaptadorPatoDemo {
    static testarAdaptador(): void {
      const patoSelvagem: Pato = new PatoSelvagem();
      const adaptador: Galinha = new AdaptadorPato(patoSelvagem);
  
      console.log('Ações da Galinha:');
      adaptador.cacarejar();
      adaptador.voarBaixo();
    }
  }
  
  AdaptadorPatoDemo.testarAdaptador();

  