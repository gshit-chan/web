import type { OperationStore } from '@urql/svelte';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export enum Chats {
  Global = 'GLOBAL'
}

export type Mutation = {
  __typename?: 'Mutation';
  create_thread: Thread;
};


export type MutationCreate_ThreadArgs = {
  chat: Scalars['String'];
  message: Scalars['String'];
  title: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  get_thread?: Maybe<Thread>;
  get_threads: Array<Thread>;
};


export type QueryGet_ThreadArgs = {
  id: Scalars['String'];
};

export type Thread = {
  __typename?: 'Thread';
  chat: Chats;
  comments: Array<Thread>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
};

export type CreateThreadMutationVariables = Exact<{
  chat: Scalars['String'];
  message: Scalars['String'];
  title: Scalars['String'];
}>;


export type CreateThreadMutation = { __typename?: 'Mutation', create_thread: { __typename?: 'Thread', id: string } };

export type GetThreadQueryVariables = Exact<{
  getThreadId: Scalars['String'];
}>;


export type GetThreadQuery = { __typename?: 'Query', get_thread?: { __typename?: 'Thread', id: string, chat: Chats, message: string, username?: string | null } | null };

export type GetThreadsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetThreadsQuery = { __typename?: 'Query', get_threads: Array<{ __typename?: 'Thread', id: string, username?: string | null, title: string, message: string }> };


export const CreateThreadDocument = gql`
    mutation CreateThread($chat: String!, $message: String!, $title: String!) {
  create_thread(chat: $chat, message: $message, title: $title) {
    id
  }
}
    `;
export const GetThreadDocument = gql`
    query GetThread($getThreadId: String!) {
  get_thread(id: $getThreadId) {
    id
    chat
    message
    username
  }
}
    `;
export const GetThreadsDocument = gql`
    query GetThreads {
  get_threads {
    id
    username
    title
    message
  }
}
    `;
export type CreateThreadMutationStore = OperationStore<CreateThreadMutation, CreateThreadMutationVariables>;
export type GetThreadQueryStore = OperationStore<GetThreadQuery, GetThreadQueryVariables>;
export type GetThreadsQueryStore = OperationStore<GetThreadsQuery, GetThreadsQueryVariables>;
export const namedOperations = {
  Query: {
    GetThread: 'GetThread',
    GetThreads: 'GetThreads'
  },
  Mutation: {
    CreateThread: 'CreateThread'
  }
}