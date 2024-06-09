import type { FastifyPluginAsyncJsonSchemaToTs } from "@fastify/type-provider-json-schema-to-ts";

export const apiPost: FastifyPluginAsyncJsonSchemaToTs = async (fastify, _options) => {
    fastify.post(
        "/api-post",
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

export const apiGet: FastifyPluginAsyncJsonSchemaToTs = async (fastify, _options) => {
    fastify.get(
        "/api-get",
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

export const apiRoutes = {
    apiGet,
    apiPost,
};
