import NextAuth from "next-auth";
import Providers from "next-auth/providers";

interface Credentials {
	username: string;
	password: string;
}

export default NextAuth({
	providers: [
		Providers.Credentials({
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" },
			},
			authorize: async (credentials: Credentials) => {
				const user = { id: 1, name: "Admin", email: "admin@exemple.com" };
				if (
					credentials.username === "admin" &&
					credentials.password === "admin"
				) {
					return user;
				}
			},
		}),
	],
	pages: {
		signIn: "/auth/signin",
		signOut: "/auth/signout",
	},
});
