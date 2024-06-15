import type { FastifyPluginAsyncJsonSchemaToTs } from "@fastify/type-provider-json-schema-to-ts";

export const post: FastifyPluginAsyncJsonSchemaToTs = async (fastify, _options) => {
    fastify.post(
        "/example/example",
        {
            schema: {
                body: {
                    type: "object",
                    required: ["music"],
                    properties: {
                        music: { type: "string" },
                    },
                },
            } as const,
        },
        async (request, _reply) => {
            //const { music } = request.body;
            //return music;
            return request.body;
        },
    );
};

export const get: FastifyPluginAsyncJsonSchemaToTs = async (fastify, _options) => {
    fastify.get(
        "/example/example",
        {
            schema: {
                querystring: {
                    type: "object",
                    properties: {
                        num: { type: "number" },
                        str: { type: "string" },
                    },
                    required: ["num", "str"],
                },
            } as const,
        },
        async (request, _reply) => {
            // const { num, str } = request.query;
            // return { num, str, path: "api-get" };
            return request.query;
        },
    );
};
