import { Exception } from "@adonisjs/core/build/standalone";

export class validateKey {
  private oldKey = this.Codification(this.getThing());
  validation(key: any) {
    //este é uma simples validacao de dados ,nao julgue mal
    if (key) {
      return this.Codification(key) == this.oldKey ? true : false;
    } else {
      throw new Exception("nenhuma chave foi passada");
      return;
    }
  }
  Codification(data: string) {
    return btoa(data);
  }

  getThing() {
    return atob("c3VtaW1hc2Vu");
  }
}
