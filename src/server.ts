import connection from "./config/connection";
import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

const dbName = '';