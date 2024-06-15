import type { FastifyPluginAsyncJsonSchemaToTs, JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import Fastify from "fastify";
import { apiRoutes } from "./router/api";

const fastify = Fastify({
    logger: true,
}).withTypeProvider<JsonSchemaToTsProvider>();

fastify.get("/", async (request, reply) => {
    return { hello: "world" };
});

fastify.get(
    "/route",
    {
        schema: {
            querystring: {
                type: "object",
                properties: {
                    foo: { type: "number" },
                    bar: { type: "string" },
                },
                required: ["foo", "bar"],
            },
        },
    },
    (request, reply) => {
        //type Query = { foo: number; bar: string };
        const { foo, bar } = request.query; // type safe!
        console.log(foo);
        console.log(bar);
    },
);

for (const [_idx, route] of Object.entries<FastifyPluginAsyncJsonSchemaToTs>(apiRoutes)) {
    fastify.register(route);
}
/**
 * Run the server!
 */
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
