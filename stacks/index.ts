import { App } from "@serverless-stack/resources";

import { JobsStack } from "./jobs";

const stage = process.env.STAGE ?? ("local" as string);

export default function main(app: App) {
	app.setDefaultFunctionProps({
		runtime: "nodejs16.x",
		environment: {
			STAGE: stage,
			JWT_SECRET: process.env.JWT_SECRET ?? "secret",
			MONGO_URI: process.env.MONGO_URI ?? "mongodb://localhost:27017/billybot-api-local",
			REGION: app.region,
			DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID ?? "client_id",
			DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET ?? "client_secret"
		}
	});
	new JobsStack(app, "jobs");
}
