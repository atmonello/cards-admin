import jwt from "jsonwebtoken";

export default async ({ app: { store, $cookies, $axios } }) => {
  const token = await $cookies.get("mnl-user-token");
  const logged = await store.getters.logged;

  if (token && !logged) {
    const { exp, id } = await jwt.decode(token);

    if (Date.now() < exp * 1000) {
      const {
        data: { email, firstName }
      } = await $axios.get("/users?id=" + id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      await store.dispatch("setLogged", true);
      await store.dispatch("setUser", {
        id,
        email,
        firstName
      });
    }
  }
};
