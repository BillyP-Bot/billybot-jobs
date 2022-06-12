// app info
export const IS_LOCAL = process.env.IS_LOCAL ? true : false;
export const STAGE = process.env.STAGE as string;
export const REGION = process.env.REGION as string;
// secrets
export const JWT_SECRET = process.env.JWT_SECRET as string;
export const MONGO_URI = process.env.MONGO_URI as string;
export const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID as string;
export const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET as string;
// resources
export const MEDIA_BUCKET = process.env.MEDIA_BUCKET as string;
export const REFRESH_TOKEN_QUEUE = process.env.REFRESH_TOKEN_QUEUE as string;
// static urls
export const DISCORD_API = "https://discord.com/api";
