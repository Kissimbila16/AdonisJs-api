export class Authmiddleware {
  async getKey({ response }, next) {
    if (!response) {
      throw console.error("please give the key to list");
    } else {
      await next();
    }
  }
}
