import * as repl from "repl";
/**
 * pathはユースケース
 */
import type { FastifyPluginAsyncJsonSchemaToTs } from "@fastify/type-provider-json-schema-to-ts";
import { dbExampleGetController } from "../../package/example/interfaceAdapter/controller/dbExampleController/get";
//import { dbExampleGetController } from "src/package/example/interfaceAdapter/controller/dbExampleController/get";

export const exampleRouter: FastifyPluginAsyncJsonSchemaToTs = async (fastify, _options) => {
    fastify.get(
        "/example",
        {
            schema: {
                querystring: {
                    type: "object",
                    properties: {
                        p1: { type: "string" },
                        p2: { type: "string" },
                    },
                    required: ["p1"],
                },
            } as const,
        },
        async (request, reply) => {
            // const { num, str } = request.query;
            // return { num, str, path: "api-get" };
            reply.code(404).header("x-xss-protection", "freedom").send({ "payload-key": "sdfasfa" });
            //return "リターン";
        },
    );
    fastify.post(
        "/example",
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

    fastify.get(
        "/db-example",
        {
            schema: {
                querystring: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                    },
                },
            } as const,
        },
        async (request, reply) => {
            const output = dbExampleGetController(request.query);
            return reply.code(200).send(output);
        },
    );
};
