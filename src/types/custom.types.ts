import { Request, Response } from "express";

export type CustomRequest = {
  name?: string;
} & Request;

export type CustomResponse = { } & Response;
