//import type { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import type { FastifyPluginAsyncJsonSchemaToTs } from "@fastify/type-provider-json-schema-to-ts";
//import Fastify from "fastify";

export const joinPost: FastifyPluginAsyncJsonSchemaToTs = async (fastify, _options) => {
    fastify.post(
        "/api-post",
        {
            schema: {
                body: {
                    type: "object",
                    required: ["animal"],
                    properties: {
                        animal: { type: "string" },
                    },
                },
            } as const,
        },
        async (request, _reply) => {
            const { animal } = request.body; // animal is string
            return animal;
        },
    );
};

export const joinGet: FastifyPluginAsyncJsonSchemaToTs = async (fastify, _options) => {
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
            const { num, str } = request.query; // animal is string
            return { num, str };
        },
    );
};
