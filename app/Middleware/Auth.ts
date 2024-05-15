import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class Auth {
  public async handle(
    { response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    if (!response) {
      return;
    }
    await next();
  }
}
