import { Exception } from "@adonisjs/core/build/standalone";
import { repository } from "../repository/repo";
import { validateKey } from "../repository/validate";

export class ControllerCandidatos {
  private repo = new repository();
  todos(respose: any, params) {
    var opcoes = {};

    opcoes = {
      search: this.isNull(params.search) ? params.search : "a",
      nome: this.isNull(respose.nome),
      orgao: this.isNull(respose.orgao),
      key: this.isNull(respose.orgao),
    };

    //   throw new Exception("Nao foi possivel Listar Candidatos");

    if (new validateKey().validation(params.key)) {
      return this.repo.listarTodos();
    } else {
      return [];
    }
  }
  um(params: any) {
    var opcoes = {};
    if (params) {
      opcoes = {
        search: this.isNull(params.search) ? params.search : "a",
        key: this.isNull(params.orgao),
      };
    } else {
      //    throw new Exception("Nao foi possivel Listar Candidato");
    }
    if (new validateKey().validation(params.key)) {
      return this.repo.listarUm(opcoes);
    } else {
      return [];
    }
  }

  isNull(value: any) {
    return value ? value : null;
  }
}
