import Database from "@ioc:Adonis/Lucid/Database";
export class repository {
  public async listarTodos(): Promise<any> {
    try {
      let query: any = await Database.from("cd_candidates").select("*");
      return query;
    } catch (e) {
      console.log(e);
    }
  }

  public async listarUm(opcao: any): Promise<any> {
    try {
      let query = Database.from("cd_candidates")
        .select(
          "*",
          Database.raw(
            "DATE_FORMAT(created_at, '%d/%m/%Y %H:%i:%s') as createdAt"
          ),
          Database.raw(
            "DATE_FORMAT(updated_at, '%d/%m/%Y %H:%i:%s') as updatedAt"
          )
        )
        .whereNotNull("email");

      if (opcao.search) {
        query.where("first_name", `${opcao.search}`);
        query.where("last_name", `${opcao.search}`);
        query.where("email", `${opcao.search}`);
      }

      return await query.first();
    } catch (e) {
      console.log(e);
      // throw new InternalServerException();
    }
  }
}
